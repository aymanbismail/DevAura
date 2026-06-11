"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isNavigatingRef = useRef(false);
  
  // تحديد المسارات التي نريد إخفاء الـ Navbar والـ Footer والـ ScrollToTopButton فيها
  // نخفي فقط إذا كان المسار يحتوي على مستوى ثالث (الكويز نفسه)
  // مثال: /quizzes/css/css-typography ← نخفي
  // مثال: /quizzes/css ← نظهر
  const pathSegments = pathname.split('/').filter(Boolean);
  const hideNavAndFooter = pathSegments.length > 2 && pathname.startsWith("/quizzes/");

  useEffect(() => {
    // تحديث: استخدام نفس المنطق للتحقق من صفحة الكويز
    const isQuizPage = pathSegments.length > 2 && pathname.startsWith("/quizzes/");
    
    if (isQuizPage) {
      let isBlocking = true;
      
      // دالة لمنع الرجوع فقط (ليس التنقل البرمجي)
      const preventBack = (event: PopStateEvent) => {
        // السماح بالتنقل البرمجي
        if (isNavigatingRef.current) {
          isNavigatingRef.current = false;
          return;
        }
        
        // التحقق من أننا لازلنا في صفحة الكويز
        if (isBlocking && window.location.pathname.split('/').filter(Boolean).length > 2) {
          // منع الرجوع وإضافة entries جديدة
          window.history.pushState(
            { page: 'quiz', timestamp: Date.now() }, 
            '', 
            window.location.pathname + window.location.search
          );
          window.history.pushState(
            { page: 'quiz', timestamp: Date.now() }, 
            '', 
            window.location.pathname + window.location.search
          );
        }
      };

      // إضافة entries متعددة في البداية
      for (let i = 0; i < 10; i++) {
        window.history.pushState(
          { page: 'quiz', timestamp: Date.now() }, 
          '', 
          window.location.pathname + window.location.search
        );
      }
      
      // الاستماع لحدث popstate
      window.addEventListener('popstate', preventBack);

      // تنظيف عند إلغاء الكومبوننت
      return () => {
        isBlocking = false;
        window.removeEventListener('popstate', preventBack);
        isNavigatingRef.current = false;
      };
    }
  }, [pathname, pathSegments.length]);

  // مراقبة التغييرات في pathname للسماح بالتنقل
  useEffect(() => {
    isNavigatingRef.current = true;
  }, [pathname]);

  if (hideNavAndFooter) {
    return (
      <div className="min-h-screen bg-background">
        {children}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default ConditionalLayout;