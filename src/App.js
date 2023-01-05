import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brand/:idBrand' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          {/*  <Route path='/:idBrand/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/:idBrand/:idCategory/:idSubCategory' element={<ItemListContainer/>}/>
        <Route path='/:idCategory/:idSubCategory' element={<ItemListContainer/>}/> */}
          <Route path='/search' element={<ItemListContainer />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
