import './ListItem.css'

function ListItem (date, name, price) {
    return <div className='list-item'>
        <div className='list-item-date'>{date}</div>
        <h2  className='list-item-name'>{name}</h2>
        <div className='list-item-price'>{price}</div>
    </div>
}

export default ListItem;