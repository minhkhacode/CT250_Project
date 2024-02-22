'use client';
import 'bootstrap/dist/css/bootstrap.css';
import 'tippy.js/dist/tippy.css';
import Scrollbars from 'react-custom-scrollbars-2';

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
