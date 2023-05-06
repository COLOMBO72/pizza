import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="General">
      <Header />
      <main className="Main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
