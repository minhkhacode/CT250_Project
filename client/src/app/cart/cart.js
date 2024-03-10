'use client';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import Cart from '@/components/carts/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign } from '@fortawesome/free-solid-svg-icons';

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
            {dataCarts ? (
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

                    <div className={cx('cart-subtotal')}>
                        <div className={cx('temporary-subtotal')}>
                            Total
                            <span className={cx('price')}>
                                20000000 <FontAwesomeIcon icon={faDongSign} />
                            </span>
                        </div>
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
                <></>
            )}
        </div>
    );
}

export default CartPage;
