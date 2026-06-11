import { apiClient } from "./client";
import { LoginResponse, RegisterResponse } from "@/types/auth";
import { UserResponse } from "@/types/api";

// ✅ إضافة الـ Response Types المفقودة
export interface VerifyEmailResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export interface ResendVerificationResponse {
  success: boolean;
  message?: string;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

export interface RefreshTokenResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message?: string;
}

export interface VerifyResetTokenResponse {
  success: boolean;
  message?: string;
  valid?: boolean;
}

export interface ResetPasswordResponse {
  success: boolean;
  message?: string;
}

export const authApi = {
  // Login
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/website/login", {
      email,
      password,
    });
    return response.data;
  },

  // Register
  register: async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>(
      "/website/register",
      {
        name,
        email,
        password,
        password_confirmation,
      }
    );
    return response.data;
  },

  // Verify Email
  verifyEmail: async (email: string, token: string): Promise<VerifyEmailResponse> => {
    const response = await apiClient.post<VerifyEmailResponse>("/website/verify-email", {
      email,
      token,
    });
    return response.data;
  },

  // Resend Verification Code
  resendVerification: async (email: string): Promise<ResendVerificationResponse> => {
    const response = await apiClient.post<ResendVerificationResponse>("/website/resend-verification", {
      email,
    });
    return response.data;
  },

  // Logout
  logout: async (): Promise<LogoutResponse> => {
    const response = await apiClient.post<LogoutResponse>("/website/logout");
    return response.data;
  },

  // Get current user
  getCurrentUser: async (): Promise<UserResponse> => {
    const response = await apiClient.get<UserResponse>("/website/me");
    return response.data;
  },

  // Refresh token
  refreshToken: async (): Promise<RefreshTokenResponse> => {
    const response = await apiClient.post<RefreshTokenResponse>("/website/refresh");
    return response.data;
  },

  // Google login URL
  getGoogleLoginUrl: (): string => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://devapi.enjezly.com/api";
    return `${baseUrl.replace("/api", "")}/website/auth/google`;
  },

  // Forgot Password
  forgotPassword: async (email: string): Promise<ForgotPasswordResponse> => {
    const response = await apiClient.post<ForgotPasswordResponse>("/website/forgot-password", {
      email,
    });
    return response.data;
  },

  // Verify Reset Token
  verifyResetToken: async (email: string, token: string): Promise<VerifyResetTokenResponse> => {
    const response = await apiClient.post<VerifyResetTokenResponse>("/website/verify-reset-token", {
      email,
      token,
    });
    return response.data;
  },

  // Reset Password
  resetPassword: async (
    email: string,
    token: string,
    password: string,
    password_confirmation: string
  ): Promise<ResetPasswordResponse> => {
    const response = await apiClient.post<ResetPasswordResponse>("/website/reset-password", {
      email,
      token,
      password,
      password_confirmation,
    });
    return response.data;
  },
};

export default authApi;