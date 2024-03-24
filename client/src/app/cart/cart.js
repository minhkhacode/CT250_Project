'use client';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { removeCartService } from '@/services/cartsService';

import styles from './cart.module.scss';
import Cart from '@/components/carts/cart';

import { faAngleDown, faAngleRight, faChevronRight, faCreditCard, faFileLines, faMapLocationDot, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CartPage() {

    const router = useRouter();

    const [dataCarts, setDataCarts] = useState([
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
            quantity: 1,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
            quantity: 1,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
            quantity: 1,
        },
        {
            title: 'Dingo Dog Bones',
            src: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
            description: `The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.`,
            price: 21000000,
            quantity: 1,
        },
    ])

    let total = 0;

    const Total = () => {
        return dataCarts.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }


    // Calculate total price
    // const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleRemoveCart = (index) => {
        dataCarts.splice(index, 1);
        setDataCarts([...dataCarts])
        // removeCartService();
    };

    const handleIncreaseQuantity = (index) => {
        if (dataCarts[index].quantity < 10)
            dataCarts[index].quantity++;
        setDataCarts([...dataCarts])

    }

    const handleDecreaseQuantity = (index) => {
        if (dataCarts[index].quantity > 1) {
            dataCarts[index].quantity--;
            setDataCarts([...dataCarts])
        }
    }

    total = Total();


    return (
        <div className={cx('wrapper')}>
            {dataCarts.length > 0 ? (
                <div className={cx('cart')}>
                    <div className={cx('products')}>
                        {dataCarts.map((item, index) => {
                            return (
                                <div className={cx('item_cart')} key={index}>
                                    <Cart
                                        title={item.title}
                                        src={item.src}
                                        description={item.description}
                                        price={item.price}
                                        quantity={item.quantity}
                                        handleDecreaseQuantity={() => handleDecreaseQuantity(index)}
                                        handleIncreaseQuantity={() => handleIncreaseQuantity(index)}
                                        handleRemoveCart={() => handleRemoveCart(index)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ clear: 'both' }}></div>
                    <div className={cx('discount')}>
                        <div className={cx('discount__top')}>
                            <span className={cx('icon')}> <FontAwesomeIcon icon={faTags} /> </span>
                            <span className={cx('discount__title')}>
                                Phiếu ưu đải
                                <i style={{ fontSize: 12, marginLeft: 4 }}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                                </i>
                            </span>
                        </div>
                        <div className={cx('code')}>
                            <input
                                className={cx('input', 'code__input')}
                                placeholder='Mã ưu đãi'
                            />
                            <button
                                className={cx('btn', 'code__btn')}
                            >Áp dụng</button>
                        </div>
                    </div>

                    <div className={cx('pay')}>
                        <div className={cx('price', 'price__temp')}>
                            <div>Tạm tính: </div>
                            <div style={{ color: '#000' }}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</div>
                        </div>
                        <div className={cx('price', 'price__final')}>
                            <span>Tổng:</span>
                            <span style={{ color: '#000', fontWeight: 800 }}>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</span>
                        </div>
                    </div>

                    <div className={cx('info', 'buyer-info')}>
                        <div className={cx('title')}>
                            <i className={cx('icon')}> <FontAwesomeIcon icon={faFileLines} /> </i>
                            <h6> Thông tin khách hàng </h6>
                        </div>
                        <div className={cx('info')}>
                            <input
                                placeholder='Tên khách hàng'
                                className={cx('input')}
                                style={{ flexBasis: '50%' }}
                            />
                            <input
                                placeholder='Email'
                                className={cx('input')}
                                style={{ flexBasis: 'calc(50% - 12px)' }}
                            />
                            <input
                                placeholder='Tên khách hàng'
                                className={cx('input')}
                                style={{ flex: 1 }}
                            />
                        </div>
                    </div>

                    <div className={cx('info', 'recive')}>
                        <div className={cx('title')}>
                            <i className={cx('icon')}> <FontAwesomeIcon icon={faMapLocationDot} /> </i>
                            <h6> Thông tin khách hàng </h6>
                        </div>
                        <h6 className={cx('heading')}>Quốc gia: Việt Nam</h6>
                        <div className={cx('address')}>
                            <label className={cx('heading')}> Địa chỉ * </label>
                            <input
                                className={cx('input')}
                                placeholder='Số nhà - Tên đường - Phường/Xã'
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div className={cx('city')}>
                            <label className={cx('heading')}> Tỉnh/Thành phố </label>
                            <input
                                className={cx('input')}
                                placeholder='Tỉnh/Huyện/Thành phố'
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className={cx('info', 'extra')}>
                        <div className={cx('title')}>
                            <h6> Thông tin bổ xung </h6>
                        </div>
                        <label className={cx('heading')}> Yêu cầu khác </label>
                        <input
                            className={cx('input')}
                            placeholder='Nhập yêu cầu (Không bắt buộc)'
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div className={cx('info', 'payment')}>
                        <div className={cx('title')}>
                            <i className={cx('icon')}> <FontAwesomeIcon icon={faCreditCard} /> </i>
                            <h6> Phương thức thanh toán </h6>
                        </div>
                        <div className={cx('method')}>
                            <input name='payment__method' type='radio' className={cx('input__method')} />
                            <label className={cx('label')}>Chuyển Khoản Ngân Hàng</label>
                            <div className={cx('description')}>
                                <p>Bạn ở&nbsp;<strong>HN</strong>&nbsp;và muốn&nbsp;<strong>tặng quà cho bạn mình&nbsp;ở&nbsp;HCM</strong>, bạn ở Huế và muốn tặng quà bạn mình ở Đà Nẵng, bạn muốn&nbsp;bên&nbsp;trong&nbsp;quà tặng của bạn&nbsp;có <strong>1 tấm thiệp ghi những lời chúc của bạn tới người thân</strong>!&nbsp;Rất đơn giản, chúng tôi có giải pháp cho bạn …</p>
                            </div>
                        </div>
                        <div className={cx('method')}>
                            <input name='payment__method' type='radio' className={cx('input__method')} />
                            <label className={cx('label', 'checked')}> Thanh toán khi nhận hàng </label>
                            <div className={cx('description')}>
                                <p>Thanh toán khi nhận hàng</p>
                            </div>
                        </div>

                    </div>

                    <button
                        className={cx('btn', 'btn-payment')}
                        onClick={() => {
                            router.push('/Payment');
                        }}
                    >
                        Đặt hàng
                    </button>
                </div>
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
