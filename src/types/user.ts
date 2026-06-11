export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  status?: string;
  provider?: string;
  email_verified?: boolean;
  last_login?: string;
  created_at?: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  avatar?: File;
}

export interface PasswordData {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}