import axios, { 
  AxiosError, 
  AxiosInstance, 
  InternalAxiosRequestConfig, 
  AxiosRequestConfig,
  AxiosResponse 
} from "axios";

class ApiClient {
  private client: AxiosInstance;
  private isRefreshing = false;
  private locked = false;
  private failedQueue: Array<{
    resolve: (value: string) => void;  // ✅ تحديد النوع بدقة - string للـ token
    reject: (reason: Error) => void;    // ✅ Error بدلاً من unknown
    config?: InternalAxiosRequestConfig;
  }> = [];

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "https://devapi.enjezly.com/api",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getToken();

        // If locked, queue the request
        if (this.locked) {
          return new Promise<InternalAxiosRequestConfig>((resolve, reject) => {
            // ✅ حفظ الـ config للاستخدام لاحقاً
            const queueItem = {
              resolve: (token: string) => {
                if (config) {
                  config.headers.Authorization = `Bearer ${token}`;
                  resolve(config);
                }
              },
              reject: (error: Error) => reject(error),
              config
            };
            this.failedQueue.push(queueItem);
          });
        }

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor with auto-refresh
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // Check if error is 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          // If already refreshing, queue this request
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve: (token: string) => {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                  resolve(this.client(originalRequest));
                },
                reject: (err: Error) => reject(err)
              });
            });
          }

          this.isRefreshing = true;
          this.locked = true;

          try {
            const refreshToken = this.getToken();
            if (!refreshToken) {
              throw new Error("No refresh token available");
            }

            // Try to refresh the token
            const response = await axios.post<{ token: string }>(
              `${process.env.NEXT_PUBLIC_API_URL || "https://devapi.enjezly.com/api"}/website/refresh`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              }
            );

            const newToken = response.data.token;

            if (newToken) {
              this.setToken(newToken);

              // Process all queued requests
              this.failedQueue.forEach((req) => {
                req.resolve(newToken);
              });
              this.failedQueue = [];

              // Retry original request
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return this.client(originalRequest);
            }
          } catch (refreshError) {
            const error = refreshError instanceof Error 
              ? refreshError 
              : new Error("Token refresh failed");

            // Reject all queued requests
            this.failedQueue.forEach((req) => req.reject(error));
            this.failedQueue = [];

            this.removeToken();

            // Redirect to login page
            if (typeof window !== "undefined") {
              window.location.href = "/login";
            }

            return Promise.reject(error);
          } finally {
            this.isRefreshing = false;
            this.locked = false;
          }
        }

        console.error("API Error:", {
          url: error.config?.url,
          method: error.config?.method,
          status: error.response?.status,
          data: error.response?.data,
        });

        return Promise.reject(error);
      }
    );
  }

  private getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  }

  public setToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  public removeToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  }

  public getInstance(): AxiosInstance {
    return this.client;
  }

  // ✅ استخدام AxiosResponse للـ return type
  public get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  public post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  public put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  public delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }
}

export const apiClient = new ApiClient();
export default apiClient;