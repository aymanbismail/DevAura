import { apiClient } from "./client";
import {
  UpdateProfileResponse,
  ChangePasswordResponse,
} from "@/types/api";
import { UpdateProfileData, PasswordData } from "@/types/user";

export const profileApi = {
  // Update profile
  updateProfile: async (data: UpdateProfileData) => {
    const formData = new FormData();

    if (data.name) {
      formData.append("name", data.name);
    }

    if (data.phone) {
      formData.append("phone", data.phone);
    }

    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }

    const response = await apiClient.post<UpdateProfileResponse>(
      "/website/update-profile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Change password
  changePassword: async (data: PasswordData) => {
    const response = await apiClient.post<ChangePasswordResponse>(
      "/website/change-password",
      data
    );
    return response.data;
  },
};

export default profileApi;