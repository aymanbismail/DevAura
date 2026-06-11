"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      // Handle error
      alert('Google authentication failed. Please try again.');
      router.push('/login');
      return;
    }

    if (token) {
      // Save token to localStorage
      localStorage.setItem('auth_token', token);
      
      // Redirect to home page
      router.push('/');
      
      // Refresh the page to update auth state
      window.location.href = '/';
    } else {
      // No token or error, redirect to login
      router.push('/login');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-muted-foreground">Authenticating with Google...</p>
      </div>
    </div>
  );
}