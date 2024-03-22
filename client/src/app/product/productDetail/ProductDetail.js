import classNames from 'classnames/bind'
import style from './ProductDetail.module.scss'
import { faAngleDown, faAngleUp, faFaceFrownOpen, faFaceSmileWink, faLayerGroup, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(style);

function ProductDetail() {
    const [showMore, setShowMore] = useState(true);

    return (
        <div className={cx('detail')}>
            <div className={cx('title')} id='title'>
                <span className={cx('icon')}><FontAwesomeIcon icon={faLayerGroup} /></span>
                <h5>Chi tiết sản phẩm</h5>
            </div>
            <div className={cx('content', { 'showmore': showMore })}>
                <p className={cx('text')}>
                    <strong>
                        <em>
                            Casio AE-1200WHD-1AVDF là chiếc đồng hồ Casio bán chạy nhất tại Việt Nam. Do đó, sản phẩm này đang bị làm giả rất nhiều tại Việt Nam và hàng loạt khách của Hải Triều phản ánh sau khi mua đồng hồ xong không biết đâu hàng thật, hàng giả. Để tránh trường hợp này, khách hàng lưu ý những điều sau.
                        </em>
                    </strong>
                </p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Casio World Time AE-1200WHD-1AVDF có gì hay và nhiều người tìm mua?
                    </em>
                </p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>

                <table id={cx('table')}>
                    <tbody>
                        <tr>
                            <td style={{ width: '100%' }}>
                                <p className={cx('text')} style={{ textAlign: 'center' }}>
                                    <strong>
                                        MỤC LỤC
                                    </strong>
                                </p>
                                <p className={cx('text')}>
                                    <a href="">
                                        {'>'} Cảnh báo nơi bán Casio AE-1200WHD-1AVDF kém chất lượng
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        1. Đồng hồ Skmei nhái mẫu mã
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        2. Sàn thương mại điện tử
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        3. Hàng xách tay
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        4. Hàng second hand
                                    </a>
                                </p>
                                <p className={cx('text')}>
                                    <a href="">
                                        {'>'} 8 sự thật thú vị về Casio có thể bạn chưa biết
                                    </a>
                                </p>
                                <p className={cx('text')}>
                                    <a href="">
                                        {'>'} Đánh giá chi tiết đồng hồ Casio AE-1200WHD-1AVDF
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        1. Giá bán rẻ
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        2. Vật liệu gia công tầm trung trở lên
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        3. Có hơn 10 tính năng
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        4. Chống nước 10ATM, đi bơi được
                                    </a>
                                </p>
                                <p className={cx('text')} style={{ paddingLeft: 40 }}>
                                    <a href="">
                                        5. Tuổi thọ pin đến 10 năm
                                    </a>
                                </p>
                                <p className={cx('text')}>
                                    <a href="">
                                        {'>'} Tổng kết về đồng hồ Casio AE-1200WHD-1AVDF
                                    </a>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h6 id="canh-bao"><strong>Cảnh báo nơi bán Casio AE-1200WHD-1AVDF kém chất lượng</strong></h6>
                <p>Để không gặp phải hàng giả đồng hồ Casio AE-1200WHD-1AVDF, khách hàng cần chú ý 5 không sau đây khi mua sắm. Thông tin này cực kỳ hữu ích vì rất nhiều người đã mua phải hàng giả khi không tuân thủ 5 nguyên tắc này.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>

                <h6 id="muc-1"><strong>1. Đồng hồ Skmei nhái mẫu mã</strong></h6>
                <p>Nhiều bạn trẻ không biết đã mua đồng hồ Skmei AE1200 nhưng trên thực tế, đây là sản phẩm nhái lại của chiếc Casio AE-1200WHD nổi tiếng. Thiết kế của Skmei AE1200 gần như là tương tự phiên bản gốc.</p>
                <p>Do đó, nếu bạn thật sự là người đam mê đồng hồ và thích sở hữu các sản phẩm chính hãng thì nên né mặt hàng này. Dù giá thành của chiếc Skmei AE1200 cũng không hề rẻ khi lên đến vài trăm ngàn.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đây chính là chiếc đồng hồ Skmei AE1200 thiết kế y chang mẫu đồng hồ Casio AE-1200WHD rất nổi tiếng của Casio, người mua nên cẩn thận
                    </em>
                </p>

                <h6 id="muc-2"><strong>2. Sàn thương mại điện tử</strong></h6>
                <p>Sàn thương mại điện tử như một mớ hỗn độn, người mua kẻ bán “la liệt” và với những sản phẩm có thương hiệu như Casio AE-1200WHD-1AVDF thì khách hàng không nên đánh đổi khi mua trên này.</p>
                <p>Theo đó, Casio là thương hiệu chính thống, được Anh Khuê (nhà phân phối độc quyền của Casio tại Việt Nam) đảm nhận. Tất cả đồng hồ phải được dán tem chống hàng giả từ Anh Khuê trong khi hàng mua trên mạng không có tem.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Giá hàng chính hãng không rẻ đến như vậy, nếu bạn muốn mua hàng chính hãng thì nên cân nhắc khi mua sắm trên các kênh này
                    </em>
                </p>

                <h6 id="muc-3"><strong>3. Hàng xách tay</strong></h6>
                <p>Chắc có thể bạn chưa biết, đồng hồ Casio AE-1200WHD-1AVDF chỉ nổi tiếng tại Việt Nam và gần như là sản phẩm độc quyền tại thị trường Việt. Nhiều cá nhân bán hàng dạng xách tay thì nhập nguồn hàng từ đâu?</p>
                <p>Câu trả lời khó mà tìm thấy vì chiếc Casio AE-1200WHD-1AVDF rất hiếm khi bán tại nước ngoài. Nếu là khách hàng thông minh thì bạn nên đến đại lý chính hãng ở Việt Nam để chọn mua để không gặp phải hàng giả.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đối với hàng xách tay thì không thể nào biết được đâu là hàng thật giả, người bán cũng không thể nào khẳng định bằng giấy tờ rằng, đó là hàng chính hãng
                    </em>
                </p>

                <h6 id="muc-4"><strong>4. Hàng second hand</strong></h6>
                <p>Đồng hồ Casio AE-1200WHD cũ được bán la liệt, nhất là những nơi bán đồng hồ cũ đã qua sử dụng. Tuy nhiên nếu là người tiêu dùng thông minh thì sẽ không bao giờ mua theo kiểu này đối với Casio AE1200.</p>
                <p>Vì chiếc Casio AE-1200WHD-1AVDF mới 100% có giá rất rẻ, khoảng hơn 1 triệu đồng trong khi hàng cũ thì đâu đó khoảng 500.000đ. Không rẻ hơn là bao nhưng mức độ trầy xước thì rất nhiều.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đồng hồ Casio AE-1200WHD giá bình dân, do đó, khi chọn mua đồng hồ cũ thì có thể nó đã bị hư nhiều và bạn chắc phải tốn nhiều chi phí bảo dưỡng đó


                    </em>
                </p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đồng Hồ Hải Triều là đại lý đồng hồ Casio chính hãng tại thị trường Việt Nam – Ảnh chụp màn hình tại website Casio Việt Nam
                    </em>
                </p>

                <h6 id="8-su-that"><strong>8 sự thật thú vị về Casio có thể bạn chưa biết</strong></h6>
                <p>
                    ● Thành lập vào năm 1946. Tính đến nay đã có hơn 76 năm tồn tại trên thị trường <br />
                    ● Là 1 trong những thương hiệu đồng hồ “quốc dân”, nổi tiếng đình đám. Hiện Casio đang có mặt ở hơn 100 quốc gia trên thế giới.<br />
                    ● Mặc dù Casio được biết đến nhiều nhất với dòng sản phẩm là đồng hồ, nhưng trên thực tế, sản phẩm đầu tiên mà công ty sản xuất khá thú vị là một chiếc nhẫn đeo ngón tay để giữ thuốc lá, được gọi là tẩu thuốc Yubiwa.<br />
                </p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Hình ảnh tẩu thuốc Yubiwa nổi tiếng 1 thời của Casio
                    </em>
                </p>
                <p>Lợi ích của phát minh này là nó cho phép người hút thuốc hút hết điếu thuốc và cũng giúp họ rảnh tay, điều này rất quan trọng đối với người lao động.</p>
                <p>Phát minh này được đưa ra sau khi Chiến tranh thế giới thứ 2 kết thúc, vốn gây khó khăn cho Nhật Bản, khiến thuốc lá trở thành một nguồn tài nguyên quý giá. Phát minh này đã trở thành một thành công lớn.</p>
                <p>● Tất cả đồng hồ Casio điện tử đều hiện 10:58 trong quảng cáo. Lý do là 10:58 được coi là sự kết hợp tốt nhất của các con số để làm cho đồng hồ trông đẹp nhất có thể và quan trọng hơn là tận dụng toàn bộ mặt đồng hồ để đảm bảo rằng nó không bị trống.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đồng hồ Casio Duro MDV106-1A mà Bill Gates đang đeo
                    </em>
                </p>
                <p>● Casio là một trong những công ty hàng đầu trong lĩnh vực máy tính khoa học và máy tính đồng hồ. Casio cũng đã đóng góp rất nhiều cho ngành công nghiệp âm nhạc với các sản phẩm như keyboard và guitar điện.</p>
                <p>● Ngoài mặt hàng chính là đồng hồ, Casio còn sản xuất máy tính, máy ảnh, máy quay phim, nhạc cụ và các thiết bị điện tử khác.</p>
                <div className={cx('clip')}>
                    <img src='https://curnonwatch.com/blog/wp-content/uploads/2021/03/dong-ho-nam-thoi-trang-bia.jpg' alt='Video' />
                    <div className={cx('play__btn')}></div>
                </div>
                <p className={cx('text', 'sub')}>
                    <em>
                        Đồng hồ Casio AE-1200WHD-1AVDF sở hữu ngoại hình góc cạnh, sang trọng và nam tính
                    </em>
                </p>



                <div className={cx('control', { 'more': showMore })}
                    onClick={() => setShowMore(!showMore)}
                >
                    <span>{showMore ? 'Xem thêm' : 'Rút gọn'}</span>
                    <span className={cx('icon')}><FontAwesomeIcon icon={showMore ? faAngleDown : faAngleUp} /></span>
                </div>
            </div>

            <div className={cx('rating')}>
                <h6 className={cx('rating__title')}>Chia sẻ này có hữu ích cho bạn?</h6>
                <div className={cx('rate')}>
                    <span className={cx('rate__value')}>
                        <span className={cx('icon', 'good')}><FontAwesomeIcon icon={faFaceSmileWink} /></span>
                        Hữu ích
                    </span>
                    <span className={cx('rate__value')}>
                        <span className={cx('icon', 'bad')}><FontAwesomeIcon icon={faFaceFrownOpen} /> </span>
                        Không hữu ích
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
