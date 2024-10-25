
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Homescreen from './Screen/Homescreen/Homescreen';
import { Routes, Route } from 'react-router-dom'; // Import Routes, Route, and Link
import Producs from './Screen/Products/Producs';
import NotFound from './NotFound';
import { SearchProvider } from './Context/SearchContext';
import Cart from './Screen/Cart/Cart';




function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homescreen />}> </Route>
          <Route path='/products' element={<Producs />}></Route>
          <Route path='/cart' element={<Cart />}>   </Route>
          

       
          <Route path='*' element={<NotFound />} /> {/* Catch all unmatched routes */}


        </Routes>


        <Footer />
      </SearchProvider>

    </div>
  );
}

export default App;
