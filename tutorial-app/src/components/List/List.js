import  ListItem from "./ListItem"
import './List.css';
import ListFilter from "./ListFilter";
import { useState } from "react";

function List({ items }) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
	<div className='list'>
      <ListFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map(i=> <ListItem date={i.date} name={i.name} price={i.price}/>)}
	</div>
  )
}

export default List;