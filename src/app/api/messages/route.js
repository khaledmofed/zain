import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const locale = searchParams.get('locale') || routing.defaultLocale;
        
        const messages = await getMessages({ locale });
        
        return NextResponse.json({ messages, locale });
    } catch (error) {
        // Fallback to default locale
        const messages = await getMessages({ locale: routing.defaultLocale });
        return NextResponse.json({ messages, locale: routing.defaultLocale });
    }
}
