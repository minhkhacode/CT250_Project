import classNames from "classnames/bind";
import style from './DashboardHeader.module.scss'

import { faChevronRight, faCircleUser, faGaugeHigh, faToolbox, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const cx = classNames.bind(style);

function DashboardHeader() {

    return (
        <div className={cx('dashboard__header')}>
            a
        </div>
    )
}

export default DashboardHeader;
