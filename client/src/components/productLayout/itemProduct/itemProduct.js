import classNames from 'classnames/bind';

import styles from './itemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct(props) {
    return (
        <div className={cx('wrapper')}>
            <div className="col-inner">
                <div className={cx('product-small', 'box')}>
                    <img
                        className={cx('img-default')}
                        // src="https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DOXA-D154RWH-4-1.jpg"
                        src={props.img}
                    />
                    <img
                        className={cx('img-change')}
                        // src="https://image.donghohaitrieu.com/wp-content/uploads/2023/12/Seiko-Presage-Craftsmanship-%E2%80%93-SPB401J-1.jpg"
                        src={props.secondImg}
                    />
                    <div className="box-text bot-text-products text-center grid-style-2">
                        <div className={cx('title-wrapper')}>
                            <p className={cx('name-product')}>
                                {/* Seiko 5 Sports – SRPK41K1 – Nam – Kính Sapphire – Bản Kỷ Niệm 110 Năm – Giới Hạn 6000
                                Chiếc – Caliber In-House 4R36 */}
                                {props.nameProduct}
                            </p>
                        </div>
                        <div className={cx('price-wrapper')}>
                            <span className={cx('woocommerce-Price-amount')}>
                                {props.price}&nbsp;<span className={cx('woocommerce-Price-currencySymbol')}>₫</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;
