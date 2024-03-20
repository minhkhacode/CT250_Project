import classNames from 'classnames/bind';
import ItemProduct from '@/components/productLayout/itemProduct';
import Slider from 'react-slick';

import styles from './MultipleItems.module.scss';

const cx = classNames.bind(styles);

function Responsive() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        slickGoTo: false,
        dots: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container">
            <div className={cx('wrapper')}>
                <Slider {...settings}>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                    <div className={cx('slider-wrapper')}>
                        <ItemProduct />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Responsive;
