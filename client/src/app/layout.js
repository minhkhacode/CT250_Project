'use client';
import 'bootstrap/dist/css/bootstrap.css';
import 'tippy.js/dist/tippy.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

import './globals.scss';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={'wrapper'}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
