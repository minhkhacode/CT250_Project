'use client';
import classNames from 'classnames/bind';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from './cart.module.scss';

const cx = classNames.bind(styles);

function CartPage() {
    // Dummy data for the cart
    const cartItems = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={cx('wrapper')}>
            <Container>
                <h1 className={cx('cartTitle')}>Your Cart</h1>
                <Row>
                    <Col>
                        <ul className={cx('cartList')}>
                            {cartItems.map((item) => (
                                <li key={item.id} className={styles.cartItem}>
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={cx('totalPrice')}>Total: ${totalPrice}</div>
                        <Button variant="primary">Checkout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CartPage;
