import classNames from 'classnames/bind';

import styles from './banner.module.scss';

const cx = classNames.bind(styles);

const dataBanner = [
    {
        src: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/BST-dong-ho-nam-ban-chay.jpg',
        title: 'BST ĐỒNG HỒ NAM HOT',
    },
    {
        src: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/11/BST-dong-ho-nu-ban-chay.jpg',
        title: 'BST ĐỒNG HỒ NỮ ĐẸP',
    },
    {
        src: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/bst-dong-ho-moi.jpg',
        title: 'ĐỒNG HỒ ĐEO TAY MỚI VỀ',
    },
    {
        src: 'https://image.donghohaitrieu.com/wp-content/uploads/2023/10/trang-suc-nu-ban-chay.jpg',
        title: 'CÁC MẪU TRANG SỨC MỚI VỀ',
    },
];

function Banner() {
    return (
        <div className={cx('banner-grid-wrapper')}>
            <div className={cx('banner-grid', 'row')} style={{ position: 'relative', height: '600px' }}>
                <div
                    className="col grid-col small-12 large-6 grid-col-1"
                    style={{ position: 'absolute', left: '-17px', top: '0px' }}
                >
                    <div className="col-inner">
                        <div className="banner-inner fill">
                            <div className={cx('banner-layers', 'container')}>
                                <img
                                    src="https://image.donghohaitrieu.com/wp-content/uploads/2024/02/Saga-Long-Xing-Da-da-1.jpg"
                                    style={{ width: '512px', height: '580px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col grid-col small-6 large-3 grid-col-1-2"
                    style={{ position: 'absolute', left: '520px' }}
                >
                    <div className="col-inner">
                        <div className="banner-inner fill">
                            <div className={cx('banner-layers', 'container')}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0027/5536/2879/files/Pioneer_RG_Leather_Black-Dial_Male_480x480.jpg?v=1673936366"
                                    style={{ height: '280px', width: '240px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col grid-col small-6 large-3 grid-col-1-2"
                    style={{ position: 'absolute', left: '787px', top: '0px' }}
                >
                    <div className="col-inner">
                        <div className="banner-inner fill">
                            <div className={cx('banner-layers', 'container')}>
                                <img
                                    src="https://media.vogue.co.uk/photos/5ec4148d7bbee7301140088f/1:1/w_1999,h_1999,c_limit/Jewellery%20Watch%20Guide%20Default%20%20February%202018%20by%20Chris%20Colls.jpg"
                                    style={{ height: '280px', width: '240px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col grid-col small-12 large-6 grid-col-1-2"
                    style={{ position: 'absolute', left: '519px', top: '300px' }}
                >
                    <div className="col-inner">
                        <div className="banner-inner fill">
                            <div className={cx('banner-layers', 'container')}>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/2623/3408/files/EMPORIO_ARMANI_AR9042_1024x1024.jpg?v=1684343740"
                                    style={{ width: '510px', height: '280px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-large bts" style={{ maxWidth: '1110px', marginLeft: 'auto', marginRight: 'auto' }}>
                {dataBanner.map((item, index) => {
                    return (
                        <div
                            className="col medium-3 small-6 large-3"
                            style={{ marginBottom: '0', padding: '0 30px 0 30px' }}
                            key={index}
                        >
                            <div className="col-inner">
                                <div className={cx('col-inner')}>
                                    <div className="image-cover">
                                        <div className={cx('image-zoom')}>
                                            <img src={item.src} />
                                        </div>
                                    </div>

                                    <div className="box-text text-center is-small">
                                        <p
                                            style={{
                                                padding: '9px 10px 15px 10px',
                                                textAlign: 'center',
                                                fontSize: '.8em',
                                                color: '#67677f',
                                                marginBottom: '0',
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Banner;
