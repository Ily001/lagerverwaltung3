import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar/NavBar';
import Barcode from './components/BarcodeGenerator';
import BarcodeScanner from './components/BarcodeScanner';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='w-full min-h-[90vh]'>
        <NavBar/>
        <div className='grid grid-cols-1 xl:grid-cols-1 col-span-10 w-full'>
        <BarcodeScanner />
        <Barcode/>

  
        </div>
      </div>
    </div>
  );
}

export default App;
