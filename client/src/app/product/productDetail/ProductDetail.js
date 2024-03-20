import classNames from 'classnames';
import style from './ProductDetail.module.scss';
const cx = classNames.bind(style);

function ProductDetail() {
    return <div className={cx('detail')}>hello</div>;
}

export default ProductDetail;
