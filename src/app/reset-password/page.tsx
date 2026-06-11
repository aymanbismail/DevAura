"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { authApi } from "@/lib/api/auth";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [tokenError, setTokenError] = useState("");
  const { isChecking } = useAuthGuard();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  // Verify token on mount
  useEffect(() => {
    const verifyToken = async () => {
      if (!token || !email) {
        setTokenError(
          "Invalid reset link. Please request a new password reset."
        );
        setIsVerifying(false);
        return;
      }

      try {
        const response = await authApi.verifyResetToken(email, token);

        if (!response.success) {
          setTokenError(response.message || "Invalid or expired reset link");
        }
      } catch (err: unknown) {
        const error = err as { response?: { data?: { message?: string } } };

        console.error("Token verification error:", err);
        setTokenError(
          error.response?.data?.message ||
            "Invalid or expired reset link. Please request a new password reset."
        );
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, [token, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authApi.resetPassword(
        email!,
        token!,
        password,
        passwordConfirmation
      );

      if (response.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setError(response.message || "Failed to reset password");
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };

      console.error("Reset password error:", err);

      const errorMessage =
        error.response?.data?.message || (err as Error)?.message;

      if (errorMessage?.includes("expired")) {
        setError("Your reset link has expired. Please request a new one.");
      } else if (errorMessage?.includes("invalid")) {
        setError("Invalid reset link. Please request a new one.");
      } else {
        setError(errorMessage || "Failed to reset password. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Loading state while verifying token
  if (isVerifying) {
    return (
      <>
        <BreadcrumbSection
          title="Reset Password"
          items={[{ label: "reset-password" }]}
        />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Verifying reset link...</p>
          </div>
        </div>
      </>
    );
  }

  // Invalid token state
  if (tokenError) {
    return (
      <>
        <BreadcrumbSection
          title="Reset Password"
          items={[{ label: "reset-password" }]}
        />
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-3">
                  <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Invalid Reset Link
              </h2>
              <p className="text-muted-foreground">{tokenError}</p>
            </div>

            <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
              <div className="space-y-3">
                <Link
                  href="/forgot-password"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
                >
                  Request New Reset Link
                </Link>

                <Link
                  href="/login"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg hover:bg-accent hover:border-ring transition-all duration-200 text-foreground font-medium"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Success state
  if (isSuccess) {
    return (
      <>
        <BreadcrumbSection
          title="Password Reset Successful"
          items={[{ label: "reset-password" }]}
        />
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-3">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Password Reset Successful!
              </h2>
              <p className="text-muted-foreground">
                Your password has been successfully reset.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    You can now login with your new password. Redirecting to
                    login page...
                  </p>
                </div>

                <Link
                  href="/login"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Reset password form
  return (
    <>
      <BreadcrumbSection
        title="Reset Password"
        items={[{ label: "reset-password" }]}
      />

      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Lock className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Create New Password
            </h2>
            <p className="text-muted-foreground">
              Enter your new password below
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground pr-12"
                    placeholder="Enter new password (min 6 characters)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    id="password_confirmation"
                    type={showPasswordConfirmation ? "text" : "password"}
                    required
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    minLength={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground pr-12"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPasswordConfirmation ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Resetting Password...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
