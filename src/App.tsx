import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import PizzaPage from './components/ProductItems/PizzaPage';

function App() {
  return (
    <div className="General">
      <Header />
      <main className="Main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
