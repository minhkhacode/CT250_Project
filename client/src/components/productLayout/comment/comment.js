import classNames from 'classnames/bind';

import styles from './comment.module.scss';

const cx = classNames.bind(styles);

function Comment(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('review-info_header')}>
                <cite>Tuấn</cite>
            </div>
            <div className={cx('comment-content')}>
                <p>Có phát quang ban đêm không vậy?</p>
            </div>
            <div className={cx('comment-cation')}>
                <div className={cx('comment-reply-link')}>Trả lời</div>
            </div>
            <div className={cx('review-time')}>9 tháng trước</div>
        </div>
    );
}

export default Comment;
