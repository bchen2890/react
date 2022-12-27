import  ListItem from "./ListItem"
import './List.css';
import ListFilter from "./ListFilter";
import { useState } from "react";
import ListChart from "./ListChart";

function List({ items }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
	<div className='list'>
      <ListFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ListChart items={filteredItems} />
        {filteredItems.map(i=> <ListItem date={i.date} name={i.name} price={i.price}/>)}
	</div>
  )
}

export default List;