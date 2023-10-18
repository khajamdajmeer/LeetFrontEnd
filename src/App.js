import './App.scss';
import Navbar from './Components/Navbar';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Problems from './Pages/Problems';
import Explore from './Pages/Explore';

const App=()=> {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/problems' element={<Problems/>} />
      </Routes>

    </Router>
   
    </>
  );
}

export default App;
