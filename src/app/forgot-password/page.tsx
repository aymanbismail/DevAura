"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { authApi } from "@/lib/api/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
  const { isChecking } = useAuthGuard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await authApi.forgotPassword(email);

      if (response.success) {
        setIsEmailSent(true);
      } else {
        setError(response.message || "Failed to send reset email");
      }
    } catch (err: unknown) {
      const errorObj = err as {
        response?: { data?: { message?: string } };
        message?: string;
      };

      console.error("Forgot password error:", err);
      setError(
        errorObj.response?.data?.message ||
          errorObj.message ||
          "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await authApi.forgotPassword(email);

      if (!response.success) {
        setError(response.message || "Failed to resend email");
      }
    } catch (err: unknown) {
      const errorObj = err as {
        response?: { data?: { message?: string } };
        message?: string;
      };

      console.error("Resend email error:", err);
      setError(
        errorObj.response?.data?.message ||
          "Failed to resend email. Please try again."
      );
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

  if (isEmailSent) {
    return (
      <>
        <BreadcrumbSection
          title="Check Your Email"
          items={[{ label: "forgot-password" }]}
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
                Check Your Email
              </h2>
              <p className="text-muted-foreground">
                We&apos;ve sent a password reset link to
              </p>
              <p className="text-foreground font-semibold mt-1">{email}</p>
            </div>

            <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Click the link in the email to reset your password. The link will expire in 1 hour.
                    If you don&apos;t see it, check your spam folder.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <button
                    onClick={handleResendEmail}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      "Resend Email"
                    )}
                  </button>

                  <Link
                    href="/login"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg hover:bg-accent hover:border-ring transition-all duration-200 text-foreground font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadcrumbSection
        title="Forgot Password"
        items={[{ label: "forgot-password" }]}
      />

      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Forgot Password?
            </h2>
            <p className="text-muted-foreground">
              No worries! Enter your email and we&apos;ll send you a reset link
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Reset Link...
                  </>
                ) : (
                  "Send Reset Link"
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
