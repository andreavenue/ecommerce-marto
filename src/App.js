import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='item-list-container text-center m-6 text-2xl font-semibold uppercase'>
          <ItemListContainer />
      </div>
      <div className='py-8'>
        <h2 className='text-center text-xl uppercase font-semibold py-12'>Detalhe do Produto</h2>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
