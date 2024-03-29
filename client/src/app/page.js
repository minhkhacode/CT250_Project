'use client';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import MultipleItems from '@/components/slider/MultipleItems';
import ProductSmall from '@/components/productLayout/product-small';
import { dataProductMail, dataProductFemale } from '@/data/bestSellingProducts';
import HomepageLayout from '@/components/homepageLayout/homepageLayout';
import NewWatches from '@/components/slider/newWatches/newWatches';
import { dataNewWatches } from '@/data/newWatches';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [dataNewProduct, setDataNewProduct] = useState([]);

    useEffect(() => {
        toast.success('hello welcome to my store!');
        setDataNewProduct(dataNewWatches);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('hinh-anh-banner', 'hide-for-small')}>
                <div className={cx('wp-block-image')}>
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV87G7vJUaP4J0ttU7EK12ZX8eaAf00opIlVMpeQwXAHCOd70gYNskcw_0dHN0SMUT8h0z3y_RO2ALPgIbopgsNDKoWgpNmYS0RgvUjXS4-geNFdZ7DYRHAGd8NqjFj4f_jIJLjrMCqvq9G-rAL7Ztln3=w1920-h500-s-no?authuser=0" />
                </div>
            </div>

            <div className={cx('gap-element', 'clearfix')} />

            <div className={cx('row', 'row-large', 'align-center', 'bts')} style={{ width: '100%' }}>
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

            <div className={cx('is-divider')}>
                <hr />
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

            {/* Đồng hồ nam bán chạy */}
            <div className={cx('is-divider')}>
                <hr />
            </div>

            <div className={cx('text')}>
                <h2 className={cx('uppercase')}>Đồng hồ nam bán chạy</h2>
            </div>

            <div
                className="row large-columns-4 medium-columns-3 small-columns-2 row-large"
                style={{ justifyContent: 'center' }}
            >
                {dataProductMail.map((item, index) => {
                    return (
                        <ProductSmall
                            key={index}
                            image={item.image}
                            secondImage={item.imageSecond}
                            nameProduct={item.nameProduct}
                            price={item.price}
                        />
                    );
                })}
            </div>

            <div className={cx('is-divider')}>
                <hr />
            </div>

            {/* Đồng hồ nữ bán chạy */}
            <div className={cx('text')}>
                <h2 className={cx('uppercase')}>Đồng hồ nữ bán chạy</h2>
            </div>

            <div
                className="row large-columns-4 medium-columns-3 small-columns-2 row-large"
                style={{ justifyContent: 'center' }}
            >
                {dataProductFemale.map((item, index) => {
                    return (
                        <ProductSmall
                            key={index}
                            id={item.id}
                            image={item.image}
                            secondImage={item.imageSecond}
                            nameProduct={item.nameProduct}
                            price={item.price}
                        />
                    );
                })}
            </div>

            <div className={cx('text')}>
                <h2 className={cx('uppercase')}>CÁC DỊCH VỤ TẠI HẢI TRIỀU</h2>
            </div>

            {/* CÁC DỊCH VỤ TẠI HẢI TRIỀU */}
            <div
                className="row hide-for-medium"
                style={{
                    height: '100%',
                    width: '1080px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '40px',
                }}
            >
                <div className="col medium-4 small-4 large-4">
                    <div className="col-inner">
                        <div className="img has-hover x md-x lg-x y md-y lg-y">
                            <Link href={'/'}>
                                <img src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-sua-chua-dong-ho.jpg" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col medium-4 small-4 large-4">
                    <div className="col-inner">
                        <div className="img has-hover x md-x lg-x y md-y lg-y">
                            <Link href={'/'}>
                                <img src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-in-khac-laser.jpg" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col medium-4 small-4 large-4">
                    <div className="col-inner">
                        <div className="img has-hover x md-x lg-x y md-y lg-y">
                            <Link href={'/'}>
                                <img src="https://image.donghohaitrieu.com/wp-content/uploads/2024/01/hinh-dich-vu-khach-hang-doanh-nghiep.jpg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* CÁC DỊCH VỤ TẠI HẢI TRIỀU */}

            <div className={cx('is-divider')}>
                <hr />
            </div>

            <div
                className="row dt-brand-row"
                style={{
                    maxWidth: '1080px',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingBottom: '30px',
                }}
            >
                <div className="col small-12 large-12">
                    <div className={cx('text')} style={{ padding: '0' }}>
                        <h2 className={cx('uppercase')} style={{ marginBottom: '10px' }}>
                            THƯƠNG HIỆU ĐỒNG HỒ NỔI TIẾNG
                        </h2>
                    </div>

                    <HomepageLayout />
                </div>
            </div>
            <div
                className="row dt-brand-row"
                style={{
                    maxWidth: '1080px',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingBottom: '30px',
                }}
            >
                <div className="col small-12 large-12">
                    <div className={cx('text')} style={{ padding: '0' }}>
                        <h2 className={cx('uppercase')} style={{ marginBottom: '10px' }}>
                            THƯƠNG HIỆU ĐỒNG HỒ CAO CẤP THỤY SỸ
                        </h2>
                    </div>
                    <HomepageLayout />
                </div>
            </div>

            <div
                className="row dt-brand-row"
                style={{
                    maxWidth: '1080px',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingBottom: '30px',
                }}
            >
                <div className="col small-12 large-12" style={{ padding: '0 auto' }}>
                    <div className="col-inner">
                        <div className="img has-hover hide-for-small x md-x lg-x y md-y lg-y">
                            <img src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/9-ly-do-nen-mua-dong-ho-tai-cua-hang-dong-ho-hai-trieu.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('is-divider')}>
                <hr />
            </div>

            <div className={cx('text')} style={{ padding: '0' }}>
                <h2 className={cx('uppercase')} style={{ marginBottom: '20px' }}>
                    CÁC MẪU ĐỒNG HỒ MỚI VỀ
                </h2>
            </div>

            <div className={cx('wrapper-newWatches')}>
                <NewWatches data={dataNewProduct} />
            </div>
        </div>
    );
}

export default Home;
