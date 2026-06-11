"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, CheckCircle2, XCircle } from "lucide-react";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { useAuth } from "@/context/AuthContext";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

// Password strength checker
const checkPasswordStrength = (password: string) => {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&#]/.test(password),
  };

  const strength = Object.values(checks).filter(Boolean).length;
  return { checks, strength };
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const { isChecking } = useAuthGuard();
  const router = useRouter();

  const { register: registerUser, loginWithGoogle } = useAuth();

  // Real-time validation
  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
        } else if (value.length < 3) {
          newErrors.name = "Name must be at least 3 characters";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "password":
        if (!value) {
          newErrors.password = "Password is required";
        } else if (value.length < 8) {
          newErrors.password = "Password must be at least 8 characters";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/.test(value)
        ) {
          newErrors.password =
            "Password must contain uppercase, lowercase, number, and special character";
        } else {
          delete newErrors.password;
        }

        // Re-validate confirm password
        if (confirmPassword && value !== confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else if (confirmPassword) {
          delete newErrors.confirmPassword;
        }
        break;

      case "confirmPassword":
        if (!value) {
          newErrors.confirmPassword = "Please confirm your password";
        } else if (value !== password) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    // Validate all fields
    validateField("name", name);
    validateField("email", email);
    validateField("password", password);
    validateField("confirmPassword", confirmPassword);

    // Check for errors
    if (
      Object.keys(errors).length > 0 ||
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    if (!acceptTerms) {
      setErrors({ ...errors, terms: "Please accept the terms and conditions" });
      return;
    }

    setIsLoading(true);

    try {
      const response = await registerUser(
        name,
        email,
        password,
        confirmPassword
      );

      // Check if verification is required
      if (response?.requires_verification) {
        // Redirect to verification page
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      }
    } catch (err) {
      // ✅ معالجة صحيحة مع التحقق من كل خطوة
      if (err instanceof AxiosError) {
        // تحقق من وجود response ثم data ثم errors
        if (err.response?.data?.errors) {
          const backendErrors: { [key: string]: string } = {};
          const errorsData = err.response.data.errors;

          Object.keys(errorsData).forEach((key) => {
            // تحقق من أن errors[key] موجود وهو array
            if (Array.isArray(errorsData[key]) && errorsData[key].length > 0) {
              backendErrors[key] = errorsData[key][0];
            }
          });

          setErrors(backendErrors);
        } else {
          // إذا لم يكن هناك errors محددة، استخدم الرسالة العامة
          setErrors({
            general:
              err.response?.data?.message ||
              err.message ||
              "Registration failed. Please try again.",
          });
        }
      } else if (err instanceof Error) {
        setErrors({
          general: err.message || "Registration failed. Please try again.",
        });
      } else {
        setErrors({
          general: "Registration failed. Please try again.",
        });
      }
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    try {
      loginWithGoogle();
    } catch (err: unknown) {
      setErrors({ general: "Google sign up failed. Please try again." });
      console.error("Google signup error:", err);
    }
  };

  const passwordStrength = checkPasswordStrength(password);

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

  return (
    <>
      <BreadcrumbSection title="Sign Up" items={[{ label: "signup" }]} />

      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Create Account
            </h2>
            <p className="text-muted-foreground">
              Join us today and get started
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
            {/* General Error Message */}
            {errors.general && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {errors.general}
              </div>
            )}

            {/* Google SignUp Button */}
            <button
              onClick={handleGoogleSignUp}
              type="button"
              disabled={isLoading}
              className="w-full cursor-pointer flex items-center justify-center gap-3 px-4 py-3 border border-border rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-foreground font-medium group-hover:text-white dark:group-hover:text-white transition-colors">
                Continue with Google
              </span>
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* SignUp Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={isLoading}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (touched.name) validateField("name", e.target.value);
                  }}
                  onBlur={() => {
                    handleBlur("name");
                    validateField("name", name);
                  }}
                  className={`w-full px-4 py-3 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-border"
                  }`}
                  placeholder="Full name"
                />
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
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
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) validateField("email", e.target.value);
                  }}
                  onBlur={() => {
                    handleBlur("email");
                    validateField("email", email);
                  }}
                  className={`w-full px-4 py-3 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-border"
                  }`}
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    disabled={isLoading}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (touched.password)
                        validateField("password", e.target.value);
                    }}
                    onBlur={() => {
                      handleBlur("password");
                      validateField("password", password);
                    }}
                    className={`w-full px-4 py-3 pr-12 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 ${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-border"
                    }`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            level <= passwordStrength.strength
                              ? passwordStrength.strength <= 2
                                ? "bg-red-500"
                                : passwordStrength.strength <= 3
                                ? "bg-yellow-500"
                                : "bg-green-500"
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="space-y-1 text-xs">
                      <div
                        className={`flex items-center gap-1 ${
                          passwordStrength.checks.length
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500"
                        }`}
                      >
                        {passwordStrength.checks.length ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>At least 8 characters</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          passwordStrength.checks.uppercase
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500"
                        }`}
                      >
                        {passwordStrength.checks.uppercase ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>One uppercase letter</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          passwordStrength.checks.lowercase
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500"
                        }`}
                      >
                        {passwordStrength.checks.lowercase ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>One lowercase letter</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          passwordStrength.checks.number
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500"
                        }`}
                      >
                        {passwordStrength.checks.number ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>One number</span>
                      </div>
                      <div
                        className={`flex items-center gap-1 ${
                          passwordStrength.checks.special
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500"
                        }`}
                      >
                        {passwordStrength.checks.special ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>One special character (@$!%*?&#)</span>
                      </div>
                    </div>
                  </div>
                )}

                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    disabled={isLoading}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (touched.confirmPassword)
                        validateField("confirmPassword", e.target.value);
                    }}
                    onBlur={() => {
                      handleBlur("confirmPassword");
                      validateField("confirmPassword", confirmPassword);
                    }}
                    className={`w-full px-4 py-3 pr-12 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground disabled:opacity-50 ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-red-500"
                        : "border-border"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div>
                <div className="flex items-start">
                  <input
                    id="accept-terms"
                    name="accept-terms"
                    type="checkbox"
                    disabled={isLoading}
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked);
                      if (e.target.checked) {
                        const newErrors = { ...errors };
                        delete newErrors.terms;
                        setErrors(newErrors);
                      }
                    }}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1 disabled:opacity-50"
                  />
                  <label
                    htmlFor="accept-terms"
                    className="ml-2 block text-sm text-muted-foreground"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !acceptTerms}
                className="w-full cursor-pointer bg-gradient-to-r from-[var(--primary)] to-[#5271FF] dark:from-[#5271FF] dark:to-[var(--primary)] text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-muted-foreground">
                Already have an account?{" "}
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
      </div>
    </>
  );
}
