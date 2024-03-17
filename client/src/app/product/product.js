'use client';
import classNames from 'classnames/bind';

import CustomPaging from '@/components/slider/image-product';

import styles from './product.module.scss';

const cx = classNames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('container')}>
                <div className={cx('col', 'image-product', 'medium-6', 'small-12', 'large-6')}>
                    <CustomPaging />
                </div>
                <div className={cx('col', 'product-page', 'medium-6', 'small-12', 'large-6')}>
                    <div className={cx('product-brand')}>
                        <h1>BRAND</h1>
                    </div>
                    <div className={cx('product-title')}>
                        <h1>
                            Doxa GrandeMetre D154RWH – Nam – Dây Da Cá Sấu – Handwinding (Lên Cót Bằng Tay) – Limited
                            Edition 1000 Mẫu, Vàng 18K
                        </h1>
                    </div>
                    <div className={cx('text', 'sku')}>
                        <strong>Mã Số Sản Phẩm:&nbsp; D154RWH</strong>
                    </div>

                    <div className={cx('price-wrapper')}>
                        <span>144.770.000 ₫</span>
                    </div>

                    <div className={cx('product-description')}>
                        <p>
                            Doxa D154RWH, chiếc đồng hồ sản xuất giới hạn 1000 chiếc trên toàn thế giới. Thiết kế
                            Skeleton khoe trọn bộ máy cơ khí thuần cót tay của ETA cho thời gian trữ cót khoảng 42 giờ.
                        </p>
                    </div>

                    <div className={cx('btn-addProduct-inside-carts')}>
                        <button className={cx('single_add_to_cart_button', 'button', 'alt')}>thêm vào giỏ hàng</button>
                    </div>

                    <p style={{ color: '#676767' }}>
                        Có thanh toán: <strong>Trả góp</strong> khi mua Online (Qua thẻ tín dụng)
                        <br />
                        Gọi đặt mua:{' '}
                        <strong>
                            <a href="tel:19006777">1900.6777</a> (8:00-1:30)
                        </strong>
                    </p>

                    <div className={cx('row-collapse')}>
                        <p>
                            <strong>Ưu đãi thêm</strong> dự kiến áp dụng 2024
                        </p>

                        <hr />

                        <div className={cx('featured-box')}>
                            <div className={cx('icon')} style={{ width: '60px' }}>
                                <img src="https://donghohaitrieu.com/wp-content/uploads/2023/06/red-check.svg" />
                            </div>
                            <div className={cx('icon-box-text')}>
                                <p>Dịch vụ gói quà miễn phí khi mua tại cửa hàng.</p>
                            </div>
                        </div>
                        <div className={cx('featured-box')}>
                            <div className={cx('icon')} style={{ width: '60px' }}>
                                <img src="https://donghohaitrieu.com/wp-content/uploads/2023/06/red-check.svg" />
                            </div>
                            <div className={cx('icon-box-text')}>
                                <p>Dịch vụ gói quà miễn phí khi mua tại cửa hàng.</p>
                            </div>
                        </div>

                        <p className={cx('p-featured-box')}>- Giảm 50% tối đa 100K cho đơn từ 200K</p>
                        <p className={cx('p-featured-box')}>- Giảm 5% tối đa 500K</p>
                    </div>
                </div>

                <div className={cx('row', 'row-product-info')}>
                    <div className={cx('col', 'medium-5', 'small-12', 'large-5')}>
                        <div className={cx('info-product')}>
                            <div className={cx('icon')}>
                                <svg
                                    id="Layer_2"
                                    data-name="Layer 2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 23.3 22.95"
                                >
                                    <defs></defs>
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <g>
                                            <path
                                                class="cls-1"
                                                d="M22.95,0L4.03,.06c-.2,0-.36,.16-.35,.36,0,.2,.16,.36,.36,.35l18.56-.06-.06,21.52H.71V3.97H19.45v15.42c0,.2,.16,.36,.36,.36s.36-.16,.36-.36V3.96c0-.39-.31-.7-.7-.7H.64c-.35,0-.64,.29-.64,.64V22.24c0,.39,.32,.71,.71,.71H22.54c.39,0,.71-.32,.71-.71l.06-21.89c0-.2-.16-.36-.36-.36Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M10.67,12.67V6.9c0-.29-.24-.53-.53-.53H3.31c-.29,.01-.52,.25-.51,.54l.05,5.77c0,.29,.24,.52,.53,.52h6.77c.29,0,.53-.24,.53-.53Zm-.71-.18H3.56V7.08h6.4v5.4Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M17.58,6.42h-5.38c-.2,0-.36,.16-.36,.36s.16,.36,.36,.36h5.38c.2,0,.36-.16,.36-.36s-.16-.36-.36-.36Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M4.11,16.74h13.7c.2,0,.36-.16,.36-.36s-.16-.36-.36-.36H4.11c-.2,0-.36,.16-.36,.36s.16,.36,.36,.36Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M4.15,19.94h13.88c.2,0,.36-.16,.36-.36s-.16-.36-.36-.36H4.15c-.2,0-.36,.16-.36,.36s.16,.36,.36,.36Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M12.24,9.71c-.2,0-.36,.16-.36,.36s.16,.36,.36,.36h5.38c.2,0,.36-.16,.36-.36s-.16-.36-.36-.36h-5.38Z"
                                            ></path>
                                            <path
                                                class="cls-1"
                                                d="M12.11,13.58h5.38c.2,0,.36-.16,.36-.36s-.16-.36-.36-.36h-5.38c-.2,0-.36,.16-.36,.36s.16,.36,.36,.36Z"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
