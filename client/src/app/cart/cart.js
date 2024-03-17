'use client';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

import Cart from '@/components/carts/cart';
import { removeCartService } from '@/services/cartsService';

import styles from './cart.module.scss';

const cx = classNames.bind(styles);

function CartPage() {
    const router = useRouter();

    // Dummy data for the cart

    const dataCarts = [
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
        },
    ];

    // Calculate total price
    // const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleRemoveCart = () => {
        removeCartService();
    };

    return (
        <div className={cx('wrapper')}>
            {dataCarts.length > 0 ? (
                <>
                    <div className={cx('products')}>
                        {dataCarts.map((item, index) => {
                            return (
                                <div className={cx('item_cart')} key={index}>
                                    <Cart
                                        title={item.title}
                                        src={item.src}
                                        description={item.description}
                                        price={item.price}
                                        onClick={() => {
                                            handleRemoveCart();
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="woocommerce-form-coupon-toggle">
                        <div className="woocommerce-info message-wrapper">
                            <div className="message-container container medium-text-center">
                                <a href="#" className="showcoupon active">
                                    <img
                                        className="lazy-load-active"
                                        width="20"
                                        height="20"
                                        src="https://donghohaitrieu.com/wp-content/themes/flatsome-child/assets/images/discount.svg"
                                        data-src="https://donghohaitrieu.com/wp-content/themes/flatsome-child/assets/images/discount.svg"
                                    />
                                    Phiếu ưu đãi<i className="icon-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={cx('subtotal-price')}>
                        <table>
                            <tbody>
                                <tr className={cx('cart-subtotal')}>
                                    <th>Tạm tính</th>
                                    <td>
                                        <span className={cx('woocommerce-Price-amount amount')}>
                                            <bdi>
                                                17.500.000&nbsp;
                                                <span className={cx('woocommerce-Price-currencySymbol')}>₫</span>
                                            </bdi>
                                        </span>
                                    </td>
                                </tr>

                                <tr className="order-total">
                                    <th>Tổng</th>
                                    <td>
                                        <strong>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    17.500.000&nbsp;
                                                    <span className="woocommerce-Price-currencySymbol">₫</span>
                                                </bdi>
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        className={cx('checkout')}
                        onClick={() => {
                            router.push('/payment');
                        }}
                    >
                        Checkout
                    </button>
                </>
            ) : (
                <>
                    <button
                        className={cx('btn-toHomepage')}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        quay trở lại cửa hàng
                    </button>
                </>
            )}
        </div>
    );
}

export default CartPage;
