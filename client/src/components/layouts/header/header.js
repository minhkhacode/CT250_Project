'use client';
import classNames from 'classnames/bind';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import { dataHeader } from './dataHeader';
import Menu from '../menu/menu.js';
import dataMenu from './dataMenu.js';
import { Wrapper as PopperWrapper } from '@/components/search/popperWrapper';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const router = useRouter();

    const [valueSearch, setValueSearch] = useState('');
    const [show, setShow] = useState('');

    useEffect(() => {
        console.log(show);
    }, [show]);

    useEffect(() => {
        console.log(valueSearch);
    }, [valueSearch]);

    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('top-bar')}>
                <div className={cx('rotate-top-bar', 'flex-row container')}>
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
                    <div className={cx('flex-col', 'show-for-medium', 'flex-left')}>
                        <ul className={cx('header-nav', 'header-nav-main', 'nav nav-left', 'nav-uppercase')}></ul>
                    </div>
                    <div className={cx('header-search', 'flex-col', 'hide-for-medium', 'flex-right')}>
                        <div className={cx('header-nav', 'header-nav-main nav', 'nav-right', 'nav-uppercase')}></div>
                        <div className={cx('flex-row', 'cart-item', 'has-icon')}>
                            <form>
                                <Tippy content={'Search'} delay={[300, 0]}>
                                    <button
                                        className={cx('search-btn')}
                                        onClick={() => {
                                            alert('hello');
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </Tippy>
                                <HeadlessTippy
                                    interactive
                                    visible={true}
                                    // render={(attrs) => (
                                    //     <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    //         <PopperWrapper>
                                    //             <h4 className={cx('search-title')}>Accounts</h4>
                                    //             {/* {searchResult.map((result) => {
                                    //                 <AccountItem key={result.id} data={result} />;
                                    //             })} */}
                                    //         </PopperWrapper>
                                    //     </div>
                                    // )}
                                >
                                    <input
                                        className={cx('search-input')}
                                        placeholder="Search products or brands"
                                        value={valueSearch}
                                        onChange={(e) => {
                                            setValueSearch(e.target.value);
                                        }}
                                    />
                                </HeadlessTippy>
                            </form>
                            <Tippy content={'Giỏ hàng'} placement="bottom" delay={[300, 0]}>
                                <div className={cx('icon-bag')} onClick={() => router.push('/cart')}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <span className={cx('badge', 'badge-warning', 'lblCartCount')}>4</span>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom', 'wide-nav', 'hide-for-sticky', 'flex-has-center')}>
                <div className={cx('container')}>
                    <div className={cx('hide-for-medium', 'flex-center')}>
                        <ul
                            className={cx(
                                'flex-row',
                                'nav',
                                'header-nav',
                                'header-bottom-nav',
                                'nav-center',
                                'nav-line-bottom',
                                'nav-size-medium',
                                'nav-spacing-xlarge',
                            )}
                        >
                            {dataHeader.map((item, index) => {
                                return (
                                    <div
                                        className={cx('nav-top-link')}
                                        key={index}
                                        onMouseEnter={() => setShow(item.title)}
                                        onMouseLeave={() => setShow('')}
                                    >
                                        <div className="menu-item menu-item-type-custom menu-item-object-custom menu-item-366 menu-item-design-full-width menu-item-has-block has-dropdown">
                                            <div className={cx('dropdown')}>
                                                <Link href={item.url}>{item.title}</Link>
                                                <div className={cx('isShow')}>
                                                    {<Menu data={dataMenu[index].data} />}
                                                    {item.title === show && <Menu data={dataMenu[index].data} />}
                                                </div>
                                                {/* <div className={cx('dropdown-content')}>
                                                    {item.item.map((secondItem, index) => {
                                                        return (
                                                            <div key={index}>
                                                            <a className={cx('')}>{secondItem.title}</a>
                                                            </div>
                                                            );
                                                        })}
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
