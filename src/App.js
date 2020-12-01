import React from 'react';
import cartItems from "./cart-items";
import './App.css';
import  CartContainer  from './components/CartContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <CartContainer cart={cartItems} />
    </div>
  );
}

export default App;
