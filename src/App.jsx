import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Auth from './Pages/Auth.jsx';
import Checkout from "./Pages/Checkout.jsx";
import Navbar from './components/Navbar.jsx';
import AuthProvider from './context/AuthContext.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import CartProvider from './context/CartContext.jsx';



function App() {

  return (
      <AuthProvider>
        <CartProvider>
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </div>
        </CartProvider>
     </AuthProvider>
  ); 
}

export default App
