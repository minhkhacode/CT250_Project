import classNames from 'classnames/bind';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-bar')}>
                <div className={cx('rotate-top-bar flex-row container')}>
                    <div className={cx('top-bar-text')}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'BỘ SƯU TẬP ĐỒNG HỒ MỚI VỀ!',
                                1000,
                                'ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT!',
                                1000,
                                'GẶP CHUYÊN GIA TƯ VẤN!',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '0.8em' }}
                            repeat={Infinity}
                        ></TypeAnimation>
                    </div>
                </div>
            </div>
            <div className={cx('header-main')}>
                <div className={cx('flex-row')}>
                    <div className={cx('flex-col')}>
                        <Link className={cx('logo-center')} href={'/'} title="Đồng hồ Store" rel="home">
                            <img
                                className={cx('header-logo')}
                                src={'https://image.donghohaitrieu.com/wp-content/uploads/2023/08/logo.png'}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className={cx('flex-col show-for-medium flex-left')}>
                        <ul className={cx('header-nav header-nav-main nav nav-left  nav-uppercase')}></ul>
                    </div>
                    <div className={cx('flex-col hide-for-medium flex-right')}>
                        <div className={cx('header-nav header-nav-main nav nav-right  nav-uppercase')}></div>
                        <div className={cx('flex-row cart-item has-icon')}>
                            <form>
                                <button
                                    className={cx('search-btn')}
                                    onClick={() => {
                                        alert('hello');
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                                <input className={cx('search-input')} placeholder="Search product or brand" />
                            </form>
                            <div className={cx('icon-bag')}>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
