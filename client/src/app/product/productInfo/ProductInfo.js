import classNames from 'classnames'
import style from './ProductInfo.module.scss'

const cx = classNames.bind(style);

function ProductInfo() {

    return (
        <div className={cx('info')}>
            <h1 className={cx('title')}>Thông tin sản phẩm</h1>
        </div>
    )
}

export default ProductInfo;