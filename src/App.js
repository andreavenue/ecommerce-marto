import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='item-list-container text-center m-6 text-2xl font-semibold uppercase'>
        <ItemListContainer />
     </div>
    </div>
  );
}

export default App;
