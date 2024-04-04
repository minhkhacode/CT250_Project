'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import style from './page.module.scss'
import Toolbar from "@/components/Toolbar/Toolbar";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";

const cx = classNames.bind(style);

function Admin(params) {

    const router = useRouter();

    const [content, setContent] = useState('');

    const handleSelectContent = (content) => {
        setContent(content)
    }
    console.log(content);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (!token)
            router.push('/Admin/AdminLogin');
    }, [])

    return (
        <div className={cx('container-fluid')}>
            <div className={cx('Admin', 'row')}>
                <div className={cx('aside', 'col', 'col-2')}>
                    <Toolbar
                        content={content}
                        handleSelectContent={handleSelectContent}
                    />
                </div>
                <div className={cx('dashboard', 'col', 'col-10')}>
                    <DashboardHeader />

                    <div className={cx('dashboard__main', 'bg-secondary')}>a</div>
                </div>
            </div>
        </div>
    )
}

export default Admin;