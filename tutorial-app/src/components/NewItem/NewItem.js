import ItemForm from './ItemForm';
import './NewItem.css';

const NewItem = (props) => {
    return <div className='new-item'>
        <ItemForm addItem={props.addItem}></ItemForm>
    </div>
}

export default NewItem;