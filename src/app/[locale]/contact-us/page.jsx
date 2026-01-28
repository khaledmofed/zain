import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/contact-us' : `/ar/contact-us`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/contact-us`,
                'ar': `${baseUrl}/ar/contact-us`
            }
        }
    };
}

const ContactUs = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle7>
        </>
    );
};

export default ContactUs;