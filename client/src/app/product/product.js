'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-hot-toast';

import CustomPaging from '@/components/slider/image-product';
import Comment from '@/components/productLayout/comment';

import styles from './product.module.scss';
import MultipleItems from '@/components/slider/slick-product-recommend/MultipleItems';
import ProductInfo from './productInfo/ProductInfo';
import ProductDetail from './productDetail/ProductDetail';

const cx = classNames.bind(styles);

function ProductPage() {
    const [nameComment, setNameComment] = useState('');
    const [emailComment, setEmailComment] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmitComment = () => {
        console.log('chung ta cua hien tai');
    };

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
                        <button
                            className={cx('single_add_to_cart_button', 'button', 'alt')}
                            onClick={() => {
                                toast.success('Successfully toasted!');
                            }}
                        >
                            thêm vào giỏ hàng
                        </button>
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
            </div>
            <div className="row">
                <div className="co small-12 large-12 ">
                    <div className="col-inner">
                        <div className={cx('text-comment')}>
                            <h2 className={cx('h2')}>thảo luận</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('wrapper', 'row')}>
                <div className={cx('container')}>
                    <div className={cx('col-md-5')}>
                        <ProductInfo></ProductInfo>
                    </div>
                    <div className={cx('col-md-7')}>
                        <ProductDetail></ProductDetail>
                    </div>
                </div>
            </div>

            <div className={cx('review-form-wrapper')}>
                <div className={cx('review-form')}>
                    <form className={cx('comment-form')}>
                        <div className={cx('comment-form-comment')}>
                            <textarea
                                className={cx('comment')}
                                cols={'45'}
                                rows={'8'}
                                placeholder="Để lại cảm nghĩ của bạn nhé!"
                            />
                        </div>
                        <div className={cx('action-comment-wrapper')}>
                            <div className={cx('comment-form-name')}>
                                <input placeholder="Tên*" />
                            </div>
                            <div className={cx('comment-form-email')}>
                                <input placeholder="Email*" type="email" />
                            </div>
                            <div className={cx('comment-form-phone')}>
                                <input placeholder="Số điện thoại" />
                            </div>
                            <div className={cx('comment-form-author')}>
                                <div className={cx('btn--normal')}>
                                    <button
                                        onClick={() => {
                                            handleSubmitComment();
                                        }}
                                    >
                                        Đăng thảo luận
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className={cx('comments')} style={{ marginTop: '20px' }}>
                        <div className={cx('comment-count')}>
                            <span>0 thảo luận</span>
                        </div>
                        <div className={cx('comment-list')}>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
                <div className={cx('relate-product')}>
                    <h3 className={cx('product-section-title')}>sản phẩm tương tự</h3>

                    <div className="row">
                        <MultipleItems />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
