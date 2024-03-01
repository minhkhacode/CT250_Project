'use client';
import classNames from 'classnames/bind';

import MultipleItems from '@/components/slider/MultipleItems';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="wrapper">
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
        </div>
    );
}

export default Home;
