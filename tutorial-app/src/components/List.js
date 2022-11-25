import  ListItem from "./ListItem"
import './List.css';

function List({ items }) {
  return (
	<div className='list'>
        {items.map(i=> <ListItem date={i.date} name={i.name} price={i.price}/>)}
	</div>
  )
}

export default List;