import { Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
