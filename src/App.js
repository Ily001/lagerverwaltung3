import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='w-full min-h-[90vh] grid grid-cols-12 '>
        <NavBar/>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
