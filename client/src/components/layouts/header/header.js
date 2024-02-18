import classNames from 'classnames/bind';

import style from './header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('top-bar')}>
                    <p className={cx('header-label')}>BỘ SƯU TẬP ĐỒNG HỒ MỚI VỀ</p>
                </div>
            </div>
        </>
    );
}

export default Header;
