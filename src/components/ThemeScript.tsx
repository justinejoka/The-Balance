'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    // This code will only run on the client side
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('theme');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      return 'light';
    }

    const colorMode = getInitialColorMode();
    document.documentElement.classList.toggle('dark', colorMode === 'dark');
  }, []);

  return null;
}