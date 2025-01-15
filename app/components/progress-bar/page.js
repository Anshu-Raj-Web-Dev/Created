// components/loader/CustomLoader.js
'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CustomLoader = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-red-500 z-50">
          <div className="h-1 bg-red-700 animate-pulse w-full"></div>
        </div>
      )}
      {children}
    </>
  );
};

export default CustomLoader;
