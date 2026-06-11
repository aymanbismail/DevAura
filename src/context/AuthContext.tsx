"use client";

// ── PORTFOLIO MODE ──────────────────────────────────────────────────────────────
// Authentication is intentionally disabled in this public portfolio version.
// All auth API calls (login, register, logout, OAuth) have been replaced with
// no-op stubs that provide a consistent guest-user experience.
//
// The original implementation is preserved in the commented block at the bottom
// of this file. To restore live authentication, uncomment those sections and
// remove the stub functions.
// ────────────────────────────────────────────────────────────────────────────────

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "@/types/user";
import { AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(null);
  const [token] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [favoritesCount, setFavoritesCount] = useState({
    resources: 0,
    tracks: 0,
  });
  const router = useRouter();
  const pathname = usePathname();

  // Resolve loading on mount — no API call needed in portfolio mode.
  useEffect(() => {
    setLoading(false);
  }, []);

  // Redirect authenticated users away from auth pages (kept for UX parity).
  useEffect(() => {
    if (loading) return;
    const authPages = [
      "/login",
      "/signup",
      "/forgot-password",
      "/verify-email",
    ];
    const isAuthPage = authPages.some((page) => pathname.startsWith(page));
    if (user && isAuthPage) {
      router.replace("/");
    }
  }, [user, loading, pathname, router]);

  /** [DISABLED] Stub login — shows a friendly demo message. */
  const login = async (_email: string, _password: string) => {
    throw new Error(
      "Authentication is disabled in this portfolio demo. The full implementation connects to a Laravel REST API.",
    );
  };

  /** [DISABLED] Stub register. */
  const register = async (
    _name: string,
    _email: string,
    _password: string,
    _password_confirmation: string,
  ) => {
    throw new Error(
      "Registration is disabled in this portfolio demo. The full implementation connects to a Laravel REST API.",
    );
  };

  /** [DISABLED] Stub logout — resets local state. */
  const logout = async () => {
    setFavoritesCount({ resources: 0, tracks: 0 });
    router.push("/");
  };

  /** [DISABLED] Stub Google OAuth. */
  const loginWithGoogle = () => {
    alert(
      "Google OAuth is disabled in this portfolio demo. The full implementation redirects to a Laravel Socialite endpoint.",
    );
  };

  const updateUser = (_userData: Partial<User>) => {
    // No-op in portfolio mode — no authenticated user.
  };

  const refreshFavoritesCount = async () => {
    // No-op in portfolio mode.
  };

  const updateFavoritesCount = (
    type: "resources" | "tracks",
    increment: boolean,
  ) => {
    setFavoritesCount((prev) => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        favoritesCount,
        login,
        register,
        logout,
        loginWithGoogle,
        updateUser,
        refreshFavoritesCount,
        updateFavoritesCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export default AuthContext;

/*
 * ── ORIGINAL LIVE AUTHENTICATION IMPLEMENTATION (DISABLED) ───────────────────
 *
 * import { authApi } from "@/lib/api/auth";
 * import { favoritesApi } from "@/lib/api/favorites";
 * import { apiClient } from "@/lib/api/client";
 *
 * // Cookie helpers
 * const setCookie = (name, value, days = 7) => { ... };
 * const getCookie = (name) => { ... };
 * const deleteCookie = (name) => { ... };
 *
 * // On mount: read token from storage, call authApi.getCurrentUser()
 * useEffect(() => {
 *   const storedToken = localStorage.getItem("auth_token") || getCookie("auth_token");
 *   if (storedToken) { setToken(storedToken); fetchUser(); } else { setLoading(false); }
 * }, []);
 *
 * const fetchUser = async () => {
 *   const response = await authApi.getCurrentUser();
 *   if (response.success) { setUser(response.user); await refreshFavoritesCount(); }
 *   else { apiClient.removeToken(); localStorage.removeItem("auth_token"); ... }
 * };
 *
 * const login = async (email, password) => {
 *   const response = await authApi.login(email, password);
 *   // Persist token, update state, redirect to "/"
 * };
 *
 * const register = async (name, email, password, password_confirmation) => {
 *   return await authApi.register(name, email, password, password_confirmation);
 * };
 *
 * const logout = async () => {
 *   await authApi.logout(); apiClient.removeToken(); localStorage.removeItem("auth_token");
 *   router.push("/login");
 * };
 *
 * const loginWithGoogle = () => { window.location.href = authApi.getGoogleLoginUrl(); };
 *
 * const refreshFavoritesCount = async () => {
 *   const response = await favoritesApi.getFavorites();
 *   if (response.success) { setFavoritesCount({ ... }); }
 * };
 * ─────────────────────────────────────────────────────────────────────────────
 */
