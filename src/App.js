import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import { Navbar } from "./components/navbar";
import { Store } from "./pages/store/store";
import { Cart } from "./pages/cart/cart";
import { StoreContextProvider } from "./context/store-context"

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
