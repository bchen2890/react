import './ItemForm.css';
import React, { useState } from 'react';

const ItemForm = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);
  const [date, setDate] = useState(new Date());
  const nameOnChange= (event) => {
    setName(event.target.value);
  };
  const priceOnChange= (event) => {
    setPrice(event.target.value);
  };
  const dateOnChange=(event)=>{
    setDate(event.target.value);
  }
  const submit=(event)=>{
    event.preventDefault();
    const data = {
      name: name,
      price: price,
      date: date
    };
    props.addItem(data);
    setName('');
    setPrice(1);
    setDate(new Date());
  }
    return <form onSubmit={submit}>
        <div className='new-item__controls'>
        <div className='new-item__control'>
          <label>Product's Name</label>
          <input type='text' value={name} onChange={nameOnChange} />
        </div>
        <div className='new-item__control'>
          <label>Price</label>
          <input type='number' min='0.01' step='0.01' value={price} onChange={priceOnChange} />
        </div>
        <div className='new-item__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateOnChange} />
        </div>
      </div>
      <div className='new-item__actions'>
        <button type='submit'>Add item</button>
      </div>
    </form>
}

export default ItemForm;