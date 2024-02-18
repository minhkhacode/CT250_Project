import classNames from 'classnames/bind';

import style from './footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
    return (
        <>
            <div className={cx('wrapper')}>Footer component</div>
        </>
    );
}

export default Footer;
