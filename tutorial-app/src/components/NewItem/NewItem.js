import { useState } from 'react';
import ItemForm from './ItemForm';
import './NewItem.css';

const NewItem = (props) => {
    const [open, setOpen] = useState(false);

    return <div className='new-item'>
        {open?<ItemForm addItem={props.addItem} onClose={()=>setOpen(false)}></ItemForm>:
        <button onClick={()=>setOpen(true)}>Add Item</button>}
        
    </div>
}

export default NewItem;