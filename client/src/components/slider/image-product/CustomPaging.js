import React from 'react';
import Slider from 'react-slick';

import classNames from 'classnames/bind';

import style from './customPaging.module.scss';

const cx = classNames.bind(style);

const data_Images = [
    { url: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/7_D154RWH-1-2.jpg' },
    { url: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/7_D154RWH-1-2.jpg' },
    { url: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DOXA-D154RWH-4-1.jpg' },
    { url: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/7_D154RWH-1-2.jpg' },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, color: '#993333' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, color: '#993333' }} onClick={onClick} />;
}

function CustomPaging() {
    const settings = {
        auto: true,
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('slider-container')}>
            <Slider {...settings}>
                {data_Images.map((item, index) => {
                    return (
                        <div key={index} className={cx('image-item-slider')}>
                            <img src={item.url} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default CustomPaging;
