'use client';
import classNames from 'classnames/bind';

import MultipleItems from '@/components/slider/MultipleItems';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('hinh-anh-banner', 'hide-for-small')}>
                <div className={cx('wp-block-image')}>
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV87G7vJUaP4J0ttU7EK12ZX8eaAf00opIlVMpeQwXAHCOd70gYNskcw_0dHN0SMUT8h0z3y_RO2ALPgIbopgsNDKoWgpNmYS0RgvUjXS4-geNFdZ7DYRHAGd8NqjFj4f_jIJLjrMCqvq9G-rAL7Ztln3=w1920-h500-s-no?authuser=0" />
                </div>
            </div>

            <div className={cx('gap-element', 'clearfix')} />

            <div className={cx('row', 'row-large', 'align-center', 'bts')}>
                <div className={cx('col', 'small-12', 'large-12')}>
                    <div className={cx('col-inner', 'text-center')}>
                        <div
                            className={cx(
                                'row row-small',
                                'align-center',
                                'dt-cat-row',
                                'dt-2row-slider-row',
                                'flickity-enabled',
                            )}
                        >
                            <div className={cx('flickity-viewport')}>
                                <div className={cx('flickity-slider')}>
                                    <div className={cx('col-wrapper', 'is-selected')}>
                                        <MultipleItems />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx('col', 'small-12', 'large-12')}>
                    <div className={cx('col-inner')}>
                        <p>
                            Điểm danh những bộ sưu tập đồng hồ mới nhất được cập nhật tại hệ thống Đồng Hồ Hải Triều và
                            những phiên bản đồng hồ được các tín đồ yêu thích đồng hồ tại Việt Nam săn lùng trong năm.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('text-center1')}>
                <div className={cx('is-divider', 'divider', 'clearfix')}>
                    <hr />
                </div>
            </div>

            <div className={cx('container-fluid', 'main')}>
                <div className="filter row">
                    <div className="filter__item filter__item-left col">
                        <img
                            className="fillter__image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU"
                            alt="dong ho vip"
                        />
                        <div className="filter__item-info">
                            <h2 className="filter__item-title">BỘ SƯU TẬP MỚI</h2>
                            <a className="filter__item-more" href="#">
                                Xem ngay
                            </a>
                        </div>
                    </div>
                    <div className="filter__item filter__item-right col row">
                        <div className="banner banner-top col col-6">
                            <img
                                className="fillter__image"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU"
                                alt="dong ho vip"
                            />
                            <div className="filter__item-info">
                                <h2 className="filter__item-title">NAM</h2>
                                <a className="filter__item-more" href="#">
                                    Xem ngay
                                </a>
                            </div>
                        </div>
                        <div className="banner banner-top  col col-6">
                            <img
                                className="fillter__image"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU"
                                alt="dong ho vip"
                            />
                            <div className="filter__item-info">
                                <h2 className="filter__item-title">NỮ</h2>
                                <a className="filter__item-more" href="#">
                                    Xem ngay
                                </a>
                            </div>
                        </div>
                        <div className="banner banner-bottom col col-12">
                            <img
                                className="fillter__image"
                                src="https://pubcdn.ivymoda.com/files/news/2023/03/31/d3c352b9962bade23fe19371b120e2de.jpg"
                                alt="dong ho vip"
                            />
                            <div className="filter__item-info">
                                <h2 className="filter__item-title">ĐỒNG HỒ ĐÔI</h2>
                                <a className="filter__item-more" href="#">
                                    Xem ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection row">
                    <div className="collection__item col">
                        <img
                            className={cx('collection__item-image')}
                            src="https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp"
                            alt="hinh anh"
                        />
                        <h2 className="collection__item-title">ABC</h2>
                    </div>
                    <div className="col collection__item">
                        <img
                            className={cx('collection__item-image')}
                            src="https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp"
                            alt="hinh anh"
                        />
                        <h2 className="collection__item-title">ABC</h2>
                    </div>
                    <div className="col collection__item">
                        <img
                            className={cx('collection__item-image')}
                            src="https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp"
                            alt="hinh anh"
                        />
                        <h2 className="collection__item-title">ABC</h2>
                    </div>
                    <div className="col collection__item">
                        <img
                            className={cx('collection__item-image')}
                            src="https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp"
                            alt="hinh anh"
                        />
                        <h2 className="collection__item-title">ABC</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
