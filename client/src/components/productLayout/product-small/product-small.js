import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from './product-small.module.scss';

const cx = classNames.bind(styles);

function ProductSmall(props) {
    return (
        <div className={cx('wrapper-product')}>
            <Link href={`/product`} className={cx('wrapper-product')}>
                <div className="col-inner">
                    <div className={cx('product-image')}>
                        <div className={cx('first-image')}>
                            {/* <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DOXA-D154RWH-4-1.jpg" /> */}
                            <img src={props.image} />
                        </div>
                        <div className={cx('second-image')}>
                            {/* <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/7_D154RWH.jpg" /> */}
                            <img src={props.secondImage} />
                        </div>
                    </div>
                    <div className={cx('box-text')}>
                        <div className={cx('product-name')}>
                            <p>
                                {/* Casio World Time AE-1200WHD-1AVDF – Nam – Quartz (Pin) – Mặt Số 45 mm, Bộ Bấm Giờ, Chống
                                Nước 10 ATM */}
                                {props.nameProduct}
                            </p>
                        </div>
                        <div className={cx('product-price')}>
                            <span className={cx('woocommerce-Price-amount')}>
                                <bdi>
                                    {props.price}&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span>
                                </bdi>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductSmall;
