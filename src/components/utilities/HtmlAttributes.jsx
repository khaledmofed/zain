"use client";
import { useEffect } from 'react';

export default function HtmlAttributes({ locale = 'en', tajawalVariable }) {
  const isRTL = locale === 'ar';

  useEffect(() => {
    // Update html attributes
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    // Add Tajawal font class for Arabic
    if (tajawalVariable) {
      document.documentElement.className = tajawalVariable;
    } else {
      document.documentElement.className = '';
    }
    
    // Update body style with Tajawal font for Arabic
    // Tajawal font is loaded from Google Fonts via next/font/google
    document.body.style.fontFamily = isRTL ? "'Tajawal', sans-serif" : "'Cabourg OT', sans-serif";
  }, [locale, isRTL, tajawalVariable]);

  return null;
}
