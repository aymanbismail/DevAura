import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function useAuthGuard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (loading) return;

    const authPages = ['/login', '/signup', '/forgot-password','reset-password'];
    const isAuthPage = authPages.some(page => pathname.startsWith(page));

    // إذا كان المستخدم مسجل دخول ويحاول الوصول لصفحات Auth
    if (user && isAuthPage) {
      router.replace('/');
    } else {
      setIsChecking(false);
    }
  }, [user, loading, pathname, router]);

  // إرجاع حالة الفحص
  return { isChecking: loading || isChecking };
}