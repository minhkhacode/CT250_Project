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
                            onClick={() => {
                                if (count === 1) {
                                    setCount(1);
                                } else {
                                    setCount(count - 1);
                                }
                            }}
                        >
                            -
                        </button>
                        <input
                            className={cx('product-qty')}
                            type="number"
                            name="product-qty"
                            min={1}
                            max="10"
                            value={count}
                            onChange={(e) => {
                                setCount(e.target.value);
                            }}
                            readOnly={false}
                        />
                        <button
                            className={cx('qty-count', 'qty-count--add')}
                            data-action="add"
                            type="button"
                            onClick={() => {
                                if (count === 10) {
                                    setCount(10);
                                } else {
                                    setCount(count + 1);
                                }
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className={cx('product-subtotal')}>
                        <span className={cx('cart-item-total')}>
                            {props.price} <FontAwesomeIcon className={cx('iconPrice')} icon={faDongSign} />{' '}
                        </span>
                    </div>
                    <Tippy content={'Delete'} delay={[500, 500]}>
                        <div className={cx('product-item-delete')}>
                            <button className={cx('btnDelete')} onClick={props.onClick}>
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
