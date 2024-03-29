import classNames from 'classnames/bind';
import Slider from 'react-slick';

import { category } from '@/data/categorys';

import styles from './MultipleItems.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

function MultipleItems() {
    const settings = {
        className: 'center',
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        height: 'auto',
        width: '100%',
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

    // const settings = {
    //     className: 'center',
    //     infinite: true,
    //     centerPadding: '60px',
    //     slidesToShow: 6,
    //     swipeToSlide: true,
    //     afterChange: function (index) {
    //         console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    //     },
    // };

    return (
        <div className={cx('slider-container')}>
            <Slider {...settings}>
                {category.map((item, index) => {
                    return (
                        <div className={cx('item')} key={index}>
                            <Link href={'/'}>
                                <img className={cx('itemImage')} src={item.src} />
                                <p className={cx('itemTitle')}>{item.title}</p>
                            </Link>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default MultipleItems;
