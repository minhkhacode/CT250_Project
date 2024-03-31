import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './homepageLayout.module.scss';

const cx = classNames.bind(styles);

function HomepageLayout({ data }) {
    return (
        <div className="slider-wrapper relative dt-brand-slider  dt-2row-slider">
            <div
                className="slider slider-nav-simple slider-nav-large slider-nav-light slider-style-normal is-draggable slider-lazy-load-active flickity-enabled"
                style={{ margin: '0 5.2rem', display: 'flex' }}
            >
                {/* <div className={cx('flickity-viewport')} style={{ display: 'flex' }}>
                    <div
                        className="col-wrapper is-selected"
                        style={{
                            width: 'calc((100%)/6)!important',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            className="ux-logo has-hover align-middle ux_logo inline-block"
                            style={{ color: 'black !important' }}
                        >
                            <div className={cx('image-color')}>
                                <Link
                                    href={'/'}
                                    style={{ padding: '8px !important', display: 'block', color: '#334862' }}
                                >
                                    <img
                                        src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Casio-1.jpg"
                                        style={{
                                            height: 'auto',
                                            display: 'flex',
                                            maxWidth: '100%',
                                            verticalAlign: 'middle',
                                            color: '#334862',
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="ux-logo has-hover align-middle ux_logo inline-block">
                            <div className={cx('image-color')}>
                                <Link href={'/'} style={{ padding: '8px !important', display: 'block' }}>
                                    <img
                                        src="https://image.donghohaitrieu.com/wp-content/uploads/2023/10/Seiko.jpg"
                                        style={{
                                            height: 'auto',
                                            display: 'flex',
                                            maxWidth: '100%',
                                            verticalAlign: 'middle',
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                {data.map((item) => {
                    return (
                        <div className={cx('flickity-viewport')} style={{ display: 'flex' }}>
                            <div
                                className="col-wrapper is-selected"
                                style={{
                                    width: 'calc((100%))!important',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div
                                    className="ux-logo has-hover align-middle ux_logo inline-block"
                                    style={{ color: 'black !important' }}
                                >
                                    {item.map((item) => {
                                        return (
                                            <div className={cx('image-color')}>
                                                <Link
                                                    href={'/'}
                                                    style={{
                                                        padding: '8px !important',
                                                        display: 'block',
                                                        color: '#334862',
                                                    }}
                                                >
                                                    <img
                                                        src={item.src}
                                                        style={{
                                                            height: 'auto',
                                                            display: 'flex',
                                                            maxWidth: '100%',
                                                            verticalAlign: 'middle',
                                                            color: '#334862',
                                                        }}
                                                    />
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomepageLayout;
