import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import NewItem from './components/NewItem/NewItem';
import Card from './components/UI/Card';

const DUMMY_ITEMS = [
  {
    date: new Date(2022, 11, 22), name: "Potato", price: 1.2
  },
  {
    date: new Date(2022, 11, 2), name: "Oranges", price: 1.9
  },
  {
    date: new Date(2022, 11, 12), name: "Tofu", price: 2.5
  },
  {
    date: new Date(2022, 11, 5), name: "Cheese", price: 3
  }
];

function App() {

  const [list, setList] = useState(DUMMY_ITEMS);

  const addItem = item => {
    setList((prevList)=>[item, ...prevList]);
  };
  return (
    <div className="App">
      <Card className="border">
        <NewItem addItem={addItem}></NewItem>
      </Card>
      <Card className="border">
        <List items={list}/>
      </Card>
    </div>
  );
}

export default App;
