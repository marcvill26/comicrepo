import React from 'react';
import NavBar from './components/NavBar/NavBar';

import Home from '../src/pages/Home/Home';
import Marvelcomics from '../src/pages/Marvelcomics/Marvelcomics';
import DcComics from '../src/pages/DcComics/DcComics';
import Shop from './pages/Shop/Shoplist';
import Register from '../src/pages/Register/Register';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.scss';

function App() {
  return (
   <Router>
     <NavBar /> 
     
      <div className="App">
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Marvelcomics' element={<Marvelcomics />}></Route>
          <Route path='/DcComics' element={<DcComics />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>
        <Footer />
     </div>
     
   </Router> 
    
  );
}

export default App;
