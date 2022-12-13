import './ItemForm.css';

const ItemForm = () => {
    return <form>
        <div className='new-item__controls'>
        <div className='new-item__control'>
          <label>Product's Name</label>
          <input type='text' />
        </div>
        <div className='new-item__control'>
          <label>Price</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-item__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-item__actions'>
        <button type='submit'>Add item</button>
      </div>
    </form>
}

export default ItemForm;