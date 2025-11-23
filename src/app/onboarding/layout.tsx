'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, user, fetchCurrentUser } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isLoading) {
        if (!isAuthenticated) {
          // Try to fetch current user to check if token is valid
          try {
            await fetchCurrentUser();
          } catch {
            // If fetch fails, redirect to login
            router.push('/login');
          }
        } else if (user?.shopId) {
          // User already has a shop, redirect to dashboard
          router.push('/dashboard');
        }
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, user, router, fetchCurrentUser]);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  // If user already has shopId, redirect to dashboard
  if (user?.shopId) {
    return null; // Will redirect
  }

  return <>{children}</>;
}

