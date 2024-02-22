'use client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGem, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const dataFooter = [
    {
        tittle: 'PRODUCTS',
        item: [
            { tittleItem: 'Angular', url: '/' },
            { tittleItem: 'React', url: '/' },
            { tittleItem: 'Vue', url: '/' },
            { tittleItem: 'Larval', url: '/' },
        ],
    },
    {
        tittle: 'USEFUL LINKS',
        item: [
            { tittleItem: 'Pricing', url: '/' },
            { tittleItem: 'Setting', url: '/' },
            { tittleItem: 'Orders', url: '/' },
            { tittleItem: 'Help', url: '/' },
        ],
    },
    {
        tittle: 'CONTACT',
        item: [
            { tittleItem: 'New York, NY 10012, US', url: '/', icon: <FontAwesomeIcon icon={faHome} /> },
            { tittleItem: 'info@example.com', url: '/', icon: <FontAwesomeIcon icon={faEnvelope} /> },
            { tittleItem: '+ 01 234 567 88', url: '/', icon: <FontAwesomeIcon icon={faPhone} /> },
            { tittleItem: '+ 01 234 567 89', url: '/', icon: <FontAwesomeIcon icon={faPrint} /> },
        ],
    },
];

function Footer() {
    const year = new Date();
    return (
        <footer>
            <div className={cx('wrapper')}>
                <section
                    className={cx(
                        'head-footer d-flex justify-content-center justify-content-lg-between p-4 border-bottom',
                    )}
                >
                    <div className={cx('header-footer-left')}>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className={cx('header-footer-right')}>
                        <Link href={'/'} className={cx('icon-footer-body')}>
                            <span className={cx('facebook')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                        </Link>
                        <Link href={'/'} className={cx('icon-footer-body')}>
                            <span className={cx('twitter')}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                        </Link>
                        <Link href={'/'} className={cx('icon-footer-body')}>
                            <span className={cx('instagram')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </Link>
                        <Link href={'/'} className={cx('icon-footer-body')}>
                            <span className={cx('linkedin')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </Link>
                        <Link href={'/'} className={cx('icon-footer-body')}>
                            <span className={cx('github')}>
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </Link>
                    </div>
                </section>
                <section className={cx('footer-body container text-center text-md-start mt-5')}>
                    <div className={cx('row mt-3')}>
                        <div className={cx('col-md-3 col-lg-4 col-xl-3 mx-auto mb-4')}>
                            <h6 className={cx('text-uppercase fw-bold mb-4')}>
                                <FontAwesomeIcon className={cx('me-3')} icon={faGem} />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        {dataFooter.map((item, index) => {
                            return (
                                <div className={cx('col-md-2 col-lg-2 col-xl-2 mx-auto mb-4')} key={index}>
                                    <h6 className={cx('text-uppercase fw-bold mb-4')}>{item.tittle}</h6>
                                    {item.item.map((secondItem, index) => {
                                        return (
                                            <>
                                                <Link key={index} href={secondItem.url}>
                                                    {secondItem.icon}
                                                    <p>{secondItem.tittleItem}</p>
                                                </Link>
                                            </>
                                        );
                                    })}
                                </div>
                            );
                        })}
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <div className={cx('footer-footer')}>
                    <section className={cx('text-center p-4')}>
                        <span>© {year.getFullYear()} Copyright: </span>
                        <Link className={cx('text-reset fw-bold')} href={'/'}>
                            MDBootstrap.com
                        </Link>
                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
