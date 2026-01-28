import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Dependency from '@/components/utilities/Dependency';
import HtmlAttributes from '@/components/utilities/HtmlAttributes';
import { ToastContainer } from 'react-toastify';
import '@/assets/css/rtl.css';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlAttributes tajawalVariable={locale === 'ar' ? tajawal.variable : ''} />
      <ToastContainer />
      <Dependency />
      {children}
    </NextIntlClientProvider>
  );
}
