'use client'

import classNames from "classnames/bind";
import style from './Paymnet.module.scss'

const cx = classNames.bind(style)

function Payment() {

    return (
        <div className={cx('Payment')}>
            Payment
        </div>
    )
}

export default Payment;