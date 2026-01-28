import Home1 from "./home1/page";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '' : `/${locale}`;
    
    return {
        title: t('siteTitle'),
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}`,
                'ar': `${baseUrl}/ar`
            }
        }
    };
}

export default async function HomePage({ params }) {
    return (
        <>
            <Home1 params={params} />
        </>
    );
}
