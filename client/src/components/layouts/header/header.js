import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx('wrapper')}>Header component</div>;
}

export default Header;
