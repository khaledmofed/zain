"use client";
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import NotFoundContent from '@/components/NotFound/NotFoundContent';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import React, { useEffect, useState } from 'react';

const NotFoundPage = () => {
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        // Fetch messages from API route
        fetch(`/api/messages?locale=${routing.defaultLocale}`)
            .then(res => res.json())
            .then(data => {
                setMessages(data.messages);
            })
            .catch(() => {
                // Fallback: empty messages object
                setMessages({});
            });
    }, []);

    if (!messages) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <NextIntlClientProvider locale={routing.defaultLocale} messages={messages}>
            <LayoutStyle7 breadCrumb="404" title="404 Page">
                <NotFoundContent />
            </LayoutStyle7>
        </NextIntlClientProvider>
    );
};

export default NotFoundPage;