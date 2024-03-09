import './menu.scss'

function Menu({data}) {
    return (
        <div className="menu">
            {data.map((menuItem, index) => (
                <div className='menu__item' key={index}>
                    <h2 className='menu__item-title'>{menuItem.title}</h2>
                    <ul className='menu__item-list'>
                        {menuItem.item.map((item,index) => (
                            <li className='menu__item-link' key={index}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default Menu;
