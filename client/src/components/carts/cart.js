import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

import style from './cart.module.scss';

const cx = className.bind(style);

function Cart(props) {
    const [count, setCount] = useState(1);

    return (
        <div className={cx('product')}>
            <div className={cx('product-image')}>
                <img src={props.src} />
            </div>

            <div className={cx('product-details')}>
                <div className={cx('product-name')}>{props.title}</div>
                <div className={cx('product-description')}>{props.description}</div>
                <div className={cx('cart-item-qty')}>
                    <div className={cx('quantity')}>
                        <button
                            className={cx('qty-count', 'qty-count--minus')}
                            data-action="minus"
                            type="button"
                            onClick={props.handleDecreaseQuantity}
                        >
                            -
                        </button>
                        <div className={cx('product-qty')}>
                            {props.quantity}
                        </div>
                        <button
                            className={cx('qty-count', 'qty-count--add')}
                            data-action="add"
                            type="button"
                            onClick={props.handleIncreaseQuantity}
                        >
                            +
                        </button>
                    </div>
                    <div className={cx('product-subtotal')}>
                        <span className={cx('cart-item-total')}>
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price * props.quantity)}
                        </span>
                    </div>
                    <Tippy content={'Delete'}>
                        <div className={cx('product-item-delete')}>
                            <button className={cx('btnDelete')} onClick={props.handleRemoveCart}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Cart;
