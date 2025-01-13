import React from 'react';
import './index.css';
import './App.css';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import {
  Home,
  Details,
  Favorites
} from './pages';

function App() {
  return (
    <div className='min-h-screen p-6 bg-gray-300 text-gray-600 text-lg'>
      <Navbar />
<Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/recipe-item/:id' element={<Details />} />
      </Routes>

</Router>
    </div>
  );
}

export default App;
