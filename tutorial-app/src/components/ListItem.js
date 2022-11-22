import './ListItem.css'

function ListItem (props) {
    return <div className='list-item'>
        <div className='list-item-date'>{props.date.toLocaleDateString()}</div>
        <h2  className='list-item-name'>{props.name}</h2>
        <div className='list-item-price'>{props.price}</div>
    </div>
}

export default ListItem;