import React from 'react';

import './ListFilter.css';

const ListFilter = (props) => {
  const changeFilter = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='items-filter'>
      <div className='items-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeFilter}>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ListFilter;