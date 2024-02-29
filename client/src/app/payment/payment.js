'use client';
import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import styles from './payment.module.scss';

const cx = classNames.bind(styles);

function PaymentPage() {
    return <div className={cx('wrapper')}>Payment Page!</div>;
}

export default PaymentPage;
