import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
          {ListItem ("2022-11-18","name of the product", "12312")}
    </div>
  );
}

export default App;
