'use client';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
// import SpringScrollbars from '@/components/scrollbars/SpringScrollbars';

import './globals.scss';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={'wrapper'}>
                {/* <SpringScrollbars autoHeight autoHeightMin={100} autoHeightMax={200}> */}
                <Header />
                {children}
                <Footer />
                {/* </SpringScrollbars> */}
            </body>
        </html>
    );
}
