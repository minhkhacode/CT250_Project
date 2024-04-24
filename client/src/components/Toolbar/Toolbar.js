import classNames from "classnames/bind";
import style from './Toolbar.module.scss'

import { faChevronRight, faCircleUser, faGaugeHigh, faToolbox, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const cx = classNames.bind(style);
function Toolbar({ handleSelectContent, content }) {

    const handleClick = (event) => {
        handleSelectContent(event.target.getAttribute('name'));
    }

    return (
        <div className={cx('toolbar')}>
            <div className={cx('logo')}>
                <i><FontAwesomeIcon icon={faToolbox} /></i>
            </div>
            <hr className={cx('breakline')}></hr>
            <div className={cx('rerender')}>
                <i><FontAwesomeIcon icon={faGaugeHigh} /></i>
                <span>Dashboard</span>
            </div>
            <hr className={cx('breakline')}></hr>

            <div className={cx('interface')}>
                <p className={cx('title')}>INTERFACE</p>
                <div
                    name={'accounts'}
                    onClick={(handleClick)}
                    className={cx('component', { 'selected': content === 'accounts' ? true : false })}
                >
                    <div className={cx('component__title')}>
                        <i><FontAwesomeIcon icon={faCircleUser} /></i>
                        <span>Quản lý Tài khoản</span>
                    </div>
                </div>
                <div
                    name={'products'}
                    onClick={(handleClick)}
                    className={cx('component', { 'selected': content === 'products' ? true : false })}
                >
                    <div className={cx('component__title')}>
                        <i><FontAwesomeIcon icon={faShopify} /></i>
                        <span>Quản lý Sản phẩm</span>
                    </div>
                </div>
                <div
                    name={'orders'}
                    onClick={(handleClick)}
                    className={cx('component', { 'selected': content === 'orders' ? true : false })}
                >
                    <div className={cx('component__title')}>
                        <i><FontAwesomeIcon icon={faTruckFast} /></i>
                        <span>Quản lý Đơn hàng</span>
                    </div>
                </div>
            </div>
            <hr className={cx('breakline')}></hr>
        </div>
    )
}

export default Toolbar;
