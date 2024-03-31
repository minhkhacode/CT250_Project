import classNames from 'classnames/bind';
import React from 'react';
import Slider from 'react-slick';

import ItemProduct from '@/components/productLayout/itemProduct';

import styles from './newWatches.module.scss';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'hide', color: '#25c2a0' }} onClick={onClick}>
            <svg className={cx('flickity-button-icon')} viewBox="0 0 100 100">
                <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    transform="translate(100, 100) rotate(180) "
                ></path>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'hide', color: 'black' }} onClick={onClick}>
            <svg className={cx('flickity-button-icon')} viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
            </svg>
        </div>
    );
}

function Responsive({ data }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        auto: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
            <Slider {...settings}>
                {data.map((item, index) => {
                    return (
                        <div className={cx('wrapper-item-product')} key={index}>
                            <ItemProduct
                                img={item.img}
                                secondImg={item.img2}
                                nameProduct={item.name}
                                price={item.price}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Responsive;
