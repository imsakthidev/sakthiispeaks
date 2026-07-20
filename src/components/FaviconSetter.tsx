'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function FaviconSetter() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/jpeg';
    link.rel = 'icon';
    link.href = resolvedTheme === 'dark' ? '/profile2.jpg' : '/profile1.jpg';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [resolvedTheme]);

  return null;
}
