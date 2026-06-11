"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Camera,
  Save,
  CheckCircle,
  Loader2,
  LogOut,
  Calendar,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { profileApi } from "@/lib/api/profile";
import { UpdateProfileData, PasswordData } from "@/types/user";

interface ErrorResponse {
  [key: string]: string[];
}

export default function ProfilePage() {
  const { user, updateUser, logout, loading: authLoading } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Profile Form State
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
  });

  // Password Form State
  const [passwordData, setPasswordData] = useState<PasswordData>({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  // Avatar State
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Errors State
  const [errors, setErrors] = useState<ErrorResponse>({});

  // Initialize profile data
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || "",
        phone: user.phone || "",
      });
      setAvatarPreview(user.avatar || "");
    }
  }, [user]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user, router]);

  // Handle profile input change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle avatar change
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setMessage({ type: "error", text: "Please select a valid image file" });
        return;
      }

      if (file.size > 2048 * 1024) {
        setMessage({ type: "error", text: "Image size must be less than 2MB" });
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Update Profile
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage({ type: "", text: "" });

    try {
      const updateData: UpdateProfileData = {
        name: profileData.name,
      };

      if (profileData.phone) {
        updateData.phone = profileData.phone;
      }

      if (selectedFile) {
        updateData.avatar = selectedFile;
      }

      const response = await profileApi.updateProfile(updateData);

      if (response.success) {
        updateUser(response.user);
        setMessage({ type: "success", text: "Profile updated successfully!" });
        setSelectedFile(null);

        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      }
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { errors?: ErrorResponse; message?: string } };
      };

      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setMessage({
          type: "error",
          text: err.response?.data?.message || "Failed to update profile",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Change Password
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage({ type: "", text: "" });

    try {
      const response = await profileApi.changePassword(passwordData);

      if (response.success) {
        setMessage({ type: "success", text: "Password changed successfully!" });
        setPasswordData({
          current_password: "",
          new_password: "",
          new_password_confirmation: "",
        });

        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      }
    } catch (error: unknown) {
      const err = error as {
        response?: { data?: { errors?: ErrorResponse; message?: string } };
      };

      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setMessage({
          type: "error",
          text: err.response?.data?.message || "Failed to change password",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden mb-6">
          <div className="relative h-48 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] dark:from-[#5271FF] dark:to-[#3AB0FF]">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-card shadow-xl overflow-hidden bg-card">
                  {avatarPreview ? (
                    <Image
                      src={avatarPreview}
                      alt={user.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3AB0FF] to-[#5271FF]">
                      <User className="text-white" size={48} />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute cursor-pointer bottom-0 right-0 bg-primary hover:opacity-90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Camera size={18} />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
            <button
              onClick={logout}
              className="absolute cursor-pointer top-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
          <div className="pt-20 pb-6 px-8">
            <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              {user.email}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {user.provider === "google" ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold shadow-md">
                  <Mail size={16} />
                  Google Account
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white text-sm font-semibold shadow-md">
                  <Mail size={16} />
                  Email Account
                </span>
              )}
              {user.status === "active" && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-md">
                  <CheckCircle size={16} />
                  Active
                </span>
              )}
              {user.email_verified && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-md">
                  <CheckCircle size={16} />
                  Verified
                </span>
              )}
            </div>
            {user.last_login && (
              <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                <Calendar className="text-primary" size={16} />
                Last login: {new Date(user.last_login).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-xl shadow-lg ${
              message.type === "success"
                ? "bg-gradient-to-r from-green-500 to-emerald-500"
                : "bg-gradient-to-r from-red-500 to-pink-500"
            } text-white font-semibold text-center animate-pulse`}
          >
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-card text-foreground shadow-lg border-2 border-primary"
                : "bg-card/50 text-muted-foreground hover:bg-card border border-border cursor-pointer"
            }`}
          >
            <User className="inline mr-2" size={20} />
            Profile Settings
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === "security"
                ? "bg-card text-foreground shadow-lg border-2 border-primary"
                : "bg-card/50 text-muted-foreground hover:bg-card border border-border cursor-pointer"
            }`}
          >
            <Shield className="inline mr-2" size={20} />
            Security
          </button>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          {activeTab === "profile" ? (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3AB0FF] to-[#5271FF] flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                Update Profile Information
              </h2>

              <form onSubmit={handleUpdateProfile} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <User className="inline mr-2 text-primary" size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 bg-background text-foreground ${
                      errors.name ? "border-destructive" : "border-border"
                    } focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive font-medium">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                {/* Email Field (Read Only) */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Mail className="inline mr-2 text-primary" size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-muted text-muted-foreground cursor-not-allowed"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Email cannot be changed
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer py-4 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] hover:opacity-90 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Save Changes
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3AB0FF] to-[#5271FF] flex items-center justify-center">
                  <Lock className="text-white" size={20} />
                </div>
                Change Password
              </h2>

              {user.provider === "google" ? (
                <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-900/50 rounded-xl p-6 text-center">
                  <Mail className="text-orange-500 mx-auto mb-4" size={48} />
                  <p className="text-foreground font-medium text-lg">
                    You are logged in with Google
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Password change is not available for Google accounts
                  </p>
                </div>
              ) : (
                <form onSubmit={handleChangePassword} className="space-y-6">
                  {/* Current Password */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Lock className="inline mr-2 text-primary" size={16} />
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current_password"
                      value={passwordData.current_password}
                      onChange={handlePasswordChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 bg-background text-foreground ${
                        errors.current_password
                          ? "border-destructive"
                          : "border-border"
                      } focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300`}
                      placeholder="Enter your current password"
                    />
                    {errors.current_password && (
                      <p className="mt-2 text-sm text-destructive font-medium">
                        {errors.current_password[0]}
                      </p>
                    )}
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Lock className="inline mr-2 text-primary" size={16} />
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      value={passwordData.new_password}
                      onChange={handlePasswordChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 bg-background text-foreground ${
                        errors.new_password
                          ? "border-destructive"
                          : "border-border"
                      } focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300`}
                      placeholder="Enter your new password"
                    />
                    {errors.new_password && (
                      <p className="mt-2 text-sm text-destructive font-medium">
                        {errors.new_password[0]}
                      </p>
                    )}
                  </div>

                  {/* Confirm New Password */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <Lock className="inline mr-2 text-primary" size={16} />
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="new_password_confirmation"
                      value={passwordData.new_password_confirmation}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300"
                      placeholder="Confirm your new password"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer py-4 bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] hover:opacity-90 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Changing Password...
                      </>
                    ) : (
                      <>
                        <Lock size={20} />
                        Change Password
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
