// ملف: types/auth.ts
import { User } from "./user";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  favoritesCount: {
    resources: number;
    tracks: number;
  };
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => Promise<RegisterResponse>; // تم التعديل هنا
  logout: () => Promise<void>;
  loginWithGoogle: () => void;
  updateUser: (userData: Partial<User>) => void;
  refreshFavoritesCount: () => Promise<void>;
  updateFavoritesCount: (type: 'resources' | 'tracks', increment: boolean) => void;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
  requires_verification?: boolean; // إضافة هذا الحقل
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
  requires_verification?: boolean; // إضافة هذا الحقل
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string[];
  };
}