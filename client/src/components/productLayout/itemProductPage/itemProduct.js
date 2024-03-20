
import classNames from 'classnames/bind';

import styles from './itemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct(props) {
    return (
        <div className={cx('wrapper')} key={props.index}>
            <div className={cx('col-inner')}>
                <div className={cx('icon-box')}>
                    <div className={cx('icon-box-img')}>
                        <div className={cx('icon-inner')}>
                            <svg
                                id="Layer_2"
                                data-name="Layer 2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24.15 23.65"
                            >
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <g>
                                        <g>
                                            <path d="M3.96,19.95c-.29-.23-.34-.66-.1-.95,.23-.29,.66-.34,.95-.1l4.27,3.45c.29,.23,.34,.66,.1,.95-.23,.29-.66,.34-.95,.1l-4.27-3.45Zm4.19-3.31c-.3-.23-.35-.65-.12-.95,.23-.3,.65-.35,.95-.12l6.66,5.16c1.18-.94,2.49-2.05,3.58-2.98,.73-.62,1.36-1.15,1.8-1.51h0s0,0,0,0c.16-.13,.25-.31,.26-.49,.02-.19-.03-.39-.16-.55h0s0,0,0,0c-.13-.16-.31-.25-.5-.27-.19-.02-.39,.03-.55,.16l-3.95,3.21c-.24,.2-.58,.2-.83,.02h0s-7.89-5.78-7.89-5.78c-.3-.22-.37-.64-.15-.95,.03-.05,.07-.08,.11-.12,2.28-1.94,2.78-3.87,2.54-5.18-.07-.4-.21-.74-.39-.98-.14-.19-.29-.32-.42-.35-.04-.01-.09,0-.14,.03-.16,1.49-1.16,2.76-2.5,3.75-1.52,1.12-3.5,1.89-5.09,2.17v4.93c0,.37-.3,.68-.68,.68s-.68-.3-.68-.68v-5.51H0c0-.34,.26-.64,.61-.67,1.48-.15,3.51-.88,5.03-2,1.11-.82,1.93-1.84,1.97-2.96,0-.14,.05-.27,.13-.39,.46-.62,1.07-.8,1.69-.64,.04,.01,.09,.03,.13,.04V.68c0-.37,.3-.68,.68-.68h13.23c.37,0,.68,.3,.68,.68V13.91c0,.37-.3,.68-.68,.68h-1.15c.24,.4,.34,.86,.3,1.31-.05,.53-.31,1.05-.75,1.41h0s-.01,0-.01,0c-.41,.33-1.04,.87-1.77,1.49-1.24,1.06-2.77,2.35-4.03,3.34-.26,.2-.63,.18-.87-.03l-7.03-5.46Zm5.53-1.16l1.16-.9h-.54c-.37,0-.68-.3-.68-.68s.3-.68,.68-.68h8.49V1.36H10.92v3.73c.13,.29,.24,.62,.31,.99,.28,1.55-.18,3.74-2.37,5.88l4.82,3.53Zm3.34-.9s-.06,.07-.1,.09l-2.11,1.64,.84,.62,2.89-2.35h-1.53ZM1.86,18.12c-.28-.25-.31-.68-.06-.96,.25-.28,.68-.31,.96-.06l.15,.13s.03,.02,.04,.04l.16,.14c.28,.25,.31,.67,.06,.95-.25,.28-.67,.31-.95,.06-.08-.07-.11-.09-.17-.15-.01,0-.03-.02-.04-.03l-.15-.13Z"></path>
                                            <path d="M7.87,19.87c-.3-.23-.35-.66-.12-.95,.23-.3,.66-.35,.95-.12l4.67,3.63c.3,.23,.35,.66,.12,.95-.23,.3-.66,.35-.95,.12l-4.67-3.63Z"></path>
                                        </g>
                                        <path d="M14.24,9.48v-.07s1.25,0,1.25,0v.04c.11,.63,.69,1.11,1.47,1.11,.89,0,1.51-.61,1.51-1.49h0c0-.87-.63-1.48-1.51-1.48-.43,0-.79,.13-1.08,.37-.14,.11-.26,.26-.35,.43h-1.17l.36-4.36h4.6v1.1h-3.53l-.21,2.26h.03c.33-.5,.95-.8,1.7-.8,1.43,0,2.46,1.03,2.46,2.46h0c0,1.55-1.16,2.61-2.81,2.61-1.56,0-2.62-.93-2.72-2.17Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className={cx('icon-box-text')}>
                            <h5 className={cx('uppercase')}>Tăng thời gian bảo hành lên đến 5 năm - Xem Thêm</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;