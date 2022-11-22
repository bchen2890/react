import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  const list = [
    {
      date: new Date(2022, 11, 22), name: "Potato", price: 1.2
    },
    {
      date: new Date(2022, 11, 22), name: "Oranges", price: 1.9
    },
    {
      date: new Date(2022, 11, 22), name: "Tofu", price: 2.5
    },
    {
      date: new Date(2022, 11, 22), name: "Cheese", price: 3
    }
  ];

  return (
    <div className="App">
      {list.map(i=> <ListItem date={i.date} name={i.name} price={i.price}/>)}
    </div>
  );
}

export default App;
