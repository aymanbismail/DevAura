"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Mail, CheckCircle } from "lucide-react";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { authApi } from "@/lib/api/auth";
import { apiClient } from "@/lib/api/client";

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }

    // Auto-submit when all filled
    if (newCode.every((digit) => digit !== "") && index === 5) {
      handleVerify(newCode.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = pastedData.split("").concat(Array(6).fill("")).slice(0, 6);
    setCode(newCode);

    if (newCode.every((digit) => digit !== "")) {
      handleVerify(newCode.join(""));
    }
  };

  const handleVerify = async (verificationCode?: string) => {
    const codeToVerify = verificationCode || code.join("");

    if (codeToVerify.length !== 6) {
      setError("Please enter the complete verification code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authApi.verifyEmail(email, codeToVerify);

      if (response.success && response.token) {
        setSuccess(true);

        // Save token
        localStorage.setItem("auth_token", response.token);
        document.cookie = `auth_token=${response.token};path=/;max-age=${
          7 * 24 * 60 * 60
        }`;
        apiClient.setToken(response.token);

        // Redirect after 2 seconds
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError(response.message || "Verification failed");
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;

    setResending(true);
    setError("");

    try {
      const response = await authApi.resendVerification(email);

      if (response.success) {
        setResendTimer(60);
        setCode(["", "", "", "", "", ""]);
        document.getElementById("code-0")?.focus();
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Failed to resend code");
    } finally {
      setResending(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Invalid verification link</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbSection
        title="Verify Email"
        items={[{ label: "verify-email" }]}
      />

      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              {success ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <Mail className="w-8 h-8 text-primary" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {success ? "Email Verified!" : "Verify Your Email"}
            </h2>
            <p className="text-muted-foreground">
              {success
                ? "Redirecting you to the home page..."
                : `We sent a verification code to ${email}`}
            </p>
          </div>

          {!success && (
            <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Code Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-4 text-center">
                  Enter Verification Code
                </label>
                <div
                  className="flex gap-2 justify-center"
                  onPaste={handlePaste}
                >
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      disabled={isLoading}
                      className="w-12 h-14 text-center text-2xl font-bold bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground disabled:opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <button
                onClick={() => handleVerify()}
                disabled={isLoading || code.some((digit) => !digit)}
                className="w-full cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Email"
                )}
              </button>

              {/* Resend Code */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm mb-2">
                  Didn&apos;t receive the code?
                </p>
                <button
                  onClick={handleResend}
                  disabled={resending || resendTimer > 0}
                  className="text-primary hover:text-primary/80 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {resending ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : resendTimer > 0 ? (
                    `Resend in ${resendTimer}s`
                  ) : (
                    "Resend Code"
                  )}
                </button>
              </div>
            </div>
          )}

          {success && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg text-center">
              <p className="font-medium">
                Your email has been verified successfully!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
