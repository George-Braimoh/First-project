import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Auth from './Pages/Auth.jsx';
import Checkout from './Pages/checkout.jsx';
import Navbar from './components/Navbar.jsx';


function App() {

  return (
      <div className="app">
        <Navbar />  
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
                
          </Routes>
      </div>
  ); 
}

export default App
