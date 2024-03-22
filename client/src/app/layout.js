'use client';
import 'bootstrap/dist/css/bootstrap.css';
import 'tippy.js/dist/tippy.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import './page.scss';
import './globals.scss';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Toaster position="top-center" reverseOrder={true} />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
