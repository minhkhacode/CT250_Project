import classNames from 'classnames/bind'
import style from './ProductInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faAngleUp, faAngleDown, faArrowsRotate, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(style);

function ProductInfo() {
    const [showMoreInfo, setShowMoreInfo] = useState(true);
    const [showDelivery, setShowDelivery] = useState(false);
    const [showGuarantee, setShowGuarantee] = useState(false);

    return (
        <div className={cx('info')}>
            <div className={cx('title')}>
                <h5><span className={cx('title__icon')}> <FontAwesomeIcon icon={faStackOverflow} /></span> Thông tin sản phẩm</h5>
            </div>
            <div className={cx('text', {
                'text--more': showMoreInfo
            })}>
                <p>
                    <strong>Thương hiệu: </strong>
                    Casio
                </p>
                <p>
                    <strong>Số hiệu sản phẩm: </strong>
                    AE-1200WHD-1AVDF
                </p>
                <p>
                    <strong>Bộ sưu tập: </strong>
                    Casio AE-1200
                </p>
                <p>
                    <strong>Xuất xứ: </strong>
                    Nhật Bản
                </p>
                <p>
                    <strong>Giới tính: </strong>
                    Nam
                </p>
                <p>
                    <strong>Kính:  </strong>
                    Resin Glass (Kính nhựa)
                </p>
                <p>
                    <strong>Máy:  </strong>
                    Quartz (Pin)
                </p>
                <p>
                    <strong>Bảo hành quốc tế:  </strong>
                    1 năm
                </p>
                <p>
                    <strong>Bảo hành tại: </strong>
                </p>
                <p>
                    <strong>Đường kính mặt số:  </strong>
                    45 mm x 42.1 mm
                </p>
                <p>
                    <strong>Bề dày mặt số:   </strong>
                    12.5 mm
                </p>
                <p>
                    <strong>Niềng:  </strong>
                </p>
                <p>
                    <strong>Dây đeo:  </strong>
                </p>
                <p>
                    <strong>Màu mặt số:   </strong>
                    Đen
                </p>
                <p>
                    <strong>Chống nước:   </strong>
                    10 ATM
                </p>
                <p>
                    <strong>Chức năng:    </strong>
                    Lịch – Bộ bấm giờ – Giờ kép – Đèn Led – Vài chức năng khác
                </p>
                <p>
                    <strong>Nơi sản xuất (Tùy từng lô hàng): </strong>
                    Trung Quốc
                </p>
            </div>
            <div className={cx('control', { 'more': showMoreInfo })}
                onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
                <span>{showMoreInfo ? 'Xem thêm' : 'Rút gọn'}</span>
                <span className={cx('icon')}><FontAwesomeIcon icon={showMoreInfo ? faAngleDown : faAngleUp} /></span>
            </div>

            <div className={cx('delivery')}>
                <div className={cx('sub-title', { 'active': showDelivery })}
                    onClick={() => setShowDelivery(!showDelivery)}
                >
                    <h5>
                        <span className={cx('sub-title__icon')}> <FontAwesomeIcon icon={faArrowsRotate} /></span>
                        Chính sách vận chuyển
                    </h5>
                    <span className={cx('sub-title__icon')}>
                        <FontAwesomeIcon icon={showDelivery ? faAngleDown : faAngleUp} />
                    </span>
                </div>
                <ul className={cx('text')}
                    style={{ display: showDelivery ? 'block' : 'none' }}
                >
                    <li>Giao hàng toàn quốc nhanh chóng.</li>
                    <li>Giao siêu tốc trong vòng 2 giờ tại: Hồ Chí Minh, Hà Nội, Biên Hòa, Vũng Tàu, Bình Dương, Đà Nẵng.</li>
                    <li>Giao hàng ngoại thành: 2-3 ngày (có thể lên đến 7 ngày tùy khu vực).</li>
                    <div className={cx('link')}>Xem thêm</div>
                </ul>
            </div>
            <div className={cx('guarantee')}>
                <div className={cx('sub-title', { 'active': showGuarantee })}
                    onClick={() => setShowGuarantee(!showGuarantee)}
                >
                    <h5>
                        <span className={cx('sub-title__icon')}> <FontAwesomeIcon icon={faTruckFast} /></span>
                        Chính sách vận chuyển
                    </h5>
                    <span className={cx('sub-title__icon')}>
                        <FontAwesomeIcon icon={showGuarantee ? faAngleDown : faAngleUp} />
                    </span>
                </div>
                <ul className={cx('text')}
                    style={{ display: showGuarantee ? 'block' : 'none' }}
                >
                    <li>Thay Pin miễn phí suốt đời.</li>
                    <li>Bảo hành máy lên đến 5 năm.</li>
                    <div className={cx('link')}>Xem thêm</div>
                </ul>
            </div>
        </div>
    )
}

export default ProductInfo;