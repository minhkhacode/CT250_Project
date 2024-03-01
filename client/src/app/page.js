import './page.scss'

function Home() {
    return (
        <div className='container-fluid main'>
            <div className='filter row'>
                <div className='filter__item filter__item-left col'>
                    <img className='fillter__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU' alt='dong ho vip' />
                    <div className='filter__item-info'>
                        <h2 className='filter__item-title'>BỘ SƯU TẬP MỚI</h2>
                        <a className='filter__item-more' href='#'>Xem ngay</a>
                    </div>
                </div>
                <div className='filter__item filter__item-right col row'>
                    <div className='banner banner-top col col-6'>
                        <img className='fillter__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU' alt='dong ho vip' />
                        <div className='filter__item-info'>
                            <h2 className='filter__item-title'>NAM</h2>
                            <a className='filter__item-more' href='#'>Xem ngay</a>
                        </div>
                    </div>
                    <div className='banner banner-top  col col-6'>
                        <img className='fillter__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURNd9kX4CJyzwBphPqGJr_Ad0tbj74rzlzw&usqp=CAU' alt='dong ho vip' />
                        <div className='filter__item-info'>
                            <h2 className='filter__item-title'>NỮ</h2>
                            <a className='filter__item-more' href='#'>Xem ngay</a>
                        </div>
                    </div>
                    <div className='banner banner-bottom col col-12'>
                        <img className='fillter__image' src='https://pubcdn.ivymoda.com/files/news/2023/03/31/d3c352b9962bade23fe19371b120e2de.jpg' alt='dong ho vip' />
                        <div className='filter__item-info'>
                            <h2 className='filter__item-title'>ĐỒNG HỒ ĐÔI</h2>
                            <a className='filter__item-more' href='#'>Xem ngay</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='collection row'>
                <div className='collection__item col'>
                    <img className='collection__item-image' src='https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp' alt='hinh anh' />
                    <h2 className='collection__item-title'>ABC</h2>
                </div>
                <div className='col collection__item'>
                    <img className='collection__item-image' src='https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp' alt='hinh anh' />
                    <h2 className='collection__item-title'>ABC</h2>

                </div>
                <div className='col collection__item'>
                    <img className='collection__item-image' src='https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp' alt='hinh anh' />
                    <h2 className='collection__item-title'>ABC</h2>
                </div>
                <div className='col collection__item'>
                    <img className='collection__item-image' src='https://fado.vn/blog/wp-content/uploads/2023/06/dominic-watch-jpg.webp' alt='hinh anh' />
                    <h2 className='collection__item-title'>ABC</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
