import { User } from "./user";

// استبدل ApiResponse<T = any> بـ ApiResponse<T = unknown>
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: {
    [key: string]: string[];
  };
}

export interface UserResponse {
  success: boolean;
  user: User;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface ChangePasswordResponse {
  success: boolean;
  message: string;
}