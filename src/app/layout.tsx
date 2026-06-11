import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ConditionalLayout from "@/components/ConditionalLayout";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { AuthProvider } from "@/context/AuthContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevAura - Master Coding Through Interactive Learning",
    template: "%s | DevAura",
  },
  description:
    "DevAura is a free, ad-free learning platform offering interactive coding quizzes, complete learning paths, and curated resources for web and software development.",
  keywords: [
    "DevAura",
    "coding quizzes",
    "learning paths",
    "programming education",
    "web development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Laravel",
    "data analysis",
    "mobile development",
    "free coding resources",
  ],
  authors: [{ name: "Hussein Imad" }],
  generator: "Next.js",
  metadataBase: new URL("https://devaura.vercel.app"),
  openGraph: {
    title: "DevAura - Master Coding Through Interactive Learning",
    description:
      "Practice programming through interactive quizzes and structured learning paths. DevAura is your all-in-one free platform for mastering web, backend, mobile, and data skills.",
    url: "https://devaura.vercel.app",
    siteName: "DevAura",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DevAura - Master Coding Through Interactive Learning",
    description:
      "Practice programming through interactive quizzes and structured learning paths.",
  },
  appleWebApp: {
    title: "DevAura",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="DevAura" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <ConditionalLayout>
              {/* <Navbar/> */}
              {children}
              <ScrollToTopButton />
              {/* <Footer/> */}
            </ConditionalLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
