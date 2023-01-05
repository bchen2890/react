import './ListItem.css'

import styled from 'styled-components';

const ListComponent = styled.div`
  @media (max-width: 768px) {
    background-color: #71cfca;
    .list-item-date {
        border-right: 1px solid #008B8B;
    }
      
    .list-item-price {
        border-left: 1px solid #7abfbf;
    }
  }
`;

function ListItem (props) {
    return <ListComponent className='list-item'>
        <div className='list-item-date'>{new Date(props.date).toLocaleDateString()}</div>
        <h2  className='list-item-name'>{props.name}</h2>
        <div className='list-item-price'>{props.price}</div>
    </ListComponent>
}

export default ListItem;