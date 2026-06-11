"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, User, Heart, LogOut } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Container from "./ui/Container";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();

  // Handle scroll effect with smooth transition
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 50;
      requestAnimationFrame(() => {
        setScrolled(shouldBeScrolled);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق dropdown عند الضغط خارجها أو الضغط على ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
      }, 0);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      setDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // ✅ دالة للتحقق من أن المسار نشط (بما في ذلك الصفحات الفرعية)
  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navLinkClasses = (path: string) =>
    cn(
      "text-sm font-medium transition-all duration-300 hover:text-primary relative",
      isActivePath(path)
        ? "bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:rounded-full"
        : "text-muted-foreground hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary/50 hover:after:rounded-full"
    );

  // Get user initials for avatar fallback
  const getUserInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      {scrolled && <div style={{ height: navbarHeight }} />}

      <header
        ref={navbarRef}
        className={cn(
          "w-full z-50 transition-all duration-500 ease-out",
          scrolled ? "fixed top-0 left-0" : "relative"
        )}
      >
        <div
          className={cn(
            "transition-all duration-500 ease-out px-6 py-4",
            scrolled
              ? "border-b backdrop-blur-md bg-background/85 shadow-lg transform translate-y-0"
              : "bg-transparent transform translate-y-0"
          )}
        >
          <Container>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="text-xl flex items-center gap-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] transition-all duration-300 hover:scale-105"
              >
                <Image 
                  src="/logo/logo.webp" 
                  alt="DevAura Logo" 
                  width={36} 
                  height={36} 
                  priority
                  quality={95}
                  className="object-contain"
                />
                DevAura
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className={navLinkClasses("/")}>
                  Home
                </Link>
                <Link href="/about" className={navLinkClasses("/about")}>
                  About
                </Link>
                <Link href="/quizzes" className={navLinkClasses("/quizzes")}>
                  Quizzes
                </Link>
                <Link href="/tracks" className={navLinkClasses("/tracks")}>
                  Tracks
                </Link>
                <Link href="/ai-tools" className={navLinkClasses("/ai-tools")}>
                  AI Tools
                </Link>
                <Link href="/resources" className={navLinkClasses("/resources")}>
                  Resources
                </Link>
                <Link href="/contact" className={navLinkClasses("/contact")}>
                  Contact
                </Link>
              </nav>

              {/* Right side buttons - Desktop only */}
              <div className="hidden lg:flex items-center gap-3">
                <ModeToggle />
                
                {loading ? (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] animate-pulse" />
                ) : user ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(!dropdownOpen);
                      }}
                      className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                      aria-label="User menu"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                          quality={90}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] flex items-center justify-center text-white font-semibold text-lg">
                          {getUserInitials(user.name)}
                        </div>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-border">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {user.email}
                          </p>
                        </div>

                        {/* Menu Items */}
                        <div className="py-1">
                          <Link
                            href="/profile"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
                          >
                            <User className="w-4 h-4" />
                            Profile
                          </Link>
                          
                          <Link
                            href="/favorites"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
                          >
                            <Heart className="w-4 h-4" />
                            Favorites
                          </Link>

                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                          >
                            <LogOut className="w-4 h-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/login"
                    aria-label="login"
                    className="rounded-sm bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] px-6 py-1.5 text-white font-semibold shadow hover:opacity-90 transition scroll-smooth"
                  >
                    Login
                  </Link>
                )}
              </div>

              {/* Mobile nav */}
              <div className="lg:hidden flex items-center gap-2">
                <ModeToggle />

                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open menu"
                      className="relative cursor-pointer overflow-hidden hover:bg-primary/10 transition-colors duration-300"
                    >
                      <Menu className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[280px] sm:w-[320px] px-6 py-8 bg-background/95 backdrop-blur-md border-l"
                  >
                    <SheetHeader>
                      <VisuallyHidden.Root>
                        <SheetTitle>Navigation Menu</SheetTitle>
                        <SheetDescription>
                          Navigate through the website using the menu below
                        </SheetDescription>
                      </VisuallyHidden.Root>
                    </SheetHeader>
                    
                    <div className="flex flex-col gap-6 mt-8">
                      {/* User Info in Mobile Menu */}
                      {user && (
                        <div className="pb-4 border-b border-border">
                          <div className="flex items-center gap-3 mb-3">
                            {user.avatar ? (
                              <Image
                                src={user.avatar}
                                alt={user.name}
                                width={48}
                                height={48}
                                className="rounded-full object-cover border-2 border-primary/20"
                                quality={90}
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] flex items-center justify-center text-white font-semibold text-xl border-2 border-primary/20">
                                {getUserInitials(user.name)}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm truncate">{user.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <Link
                        href="/"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/") && pathname === "/"
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        Home
                      </Link>

                      <Link
                        href="/about"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/about")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        About
                      </Link>

                      <Link
                        href="/quizzes"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/quizzes")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        Quizzes
                      </Link>

                      <Link
                        href="/tracks"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/tracks")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        Tracks
                      </Link>

                      <Link
                        href="/ai-tools"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/ai-tools")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        AI Tools
                      </Link>

                      <Link
                        href="/resources"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/resources")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        Resources
                      </Link>

                      <Link
                        href="/contact"
                        className={cn(
                          "text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2",
                          isActivePath("/contact")
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        Contact
                      </Link>

                      {/* User actions in mobile menu */}
                      {user ? (
                        <>
                          <div className="border-t border-border pt-4">
                            <Link
                              href="/profile"
                              className="flex items-center gap-3 text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2 text-muted-foreground"
                              onClick={() => setOpen(false)}
                            >
                              <User className="w-5 h-5" />
                              Profile
                            </Link>

                            <Link
                              href="/favorites"
                              className="flex items-center gap-3 text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:translate-x-2 text-muted-foreground"
                              onClick={() => setOpen(false)}
                            >
                              <Heart className="w-5 h-5" />
                              Favorites
                            </Link>

                            <button
                              onClick={() => {
                                handleLogout();
                                setOpen(false);
                              }}
                              className="w-full flex items-center gap-3 text-lg font-medium transition-all duration-300 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 cursor-pointer"
                            >
                              <LogOut className="w-5 h-5" />
                              Logout
                            </button>
                          </div>
                        </>
                      ) : (
                        <Link
                          href="/login"
                          className="text-lg font-medium transition-all duration-300 p-3 rounded-xl bg-gradient-to-r from-[#3AB0FF] to-[#5271FF] text-white text-center"
                          onClick={() => setOpen(false)}
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}