import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import NewItem from './components/NewItem/NewItem';
import Card from './components/UI/Card';

const DUMMY_ITEMS = [
  {
    date: new Date(2022, 10, 22), name: "Potato", price: 1.2
  },
  {
    date: new Date(2022, 9, 2), name: "Oranges", price: 1.9
  },
  {
    date: new Date(2022, 1, 12), name: "Tofu", price: 2.5
  },
  {
    date: new Date(2022, 3, 5), name: "Cheese", price: 3
  },
  {
    date: new Date(2022, 4, 5), name: "Egg", price: 2
  },
  {
    date: new Date(2022, 7, 5), name: "Donu", price: 3
  },
  {
    date: new Date(2022, 6, 5), name: "Baguette", price: 1
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
