import logo from './logo.svg';
import './App.css';

import "./css/vendor.css";
import "./css/style.css";
import Header from "./components/Header/Header";
import ShopListPanel from "./components/ShopListPanel/ShopListPanel";
import CartPanel from "./components/CartPanel/CartPanel";
import CheckOutPanel from "./components/CheckOutPanel/CheckOutPanel";
import ProductDetailPanel from "./components/ProductDetailPanel/ProductDetailPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<div className="App">
              <BrowserRouter>
        <Header></Header>
        <ul>
            <li><a href="/">shoplist</a></li>
            <li><a href="/cart">CartPanel</a></li>
            <li><a href="/checkout">CheckOutPanel</a></li>
                <li><a href="/productdetail">ProductDetailPanel</a></li>
        </ul>
            <Routes>
                    <Route path="/" element={<ShopListPanel></ShopListPanel>} />
                    <Route path="/cart"element={<CartPanel></CartPanel>} />
                    <Route path="/checkout" element={<CheckOutPanel></CheckOutPanel>} />
                <Route path="/productdetail" element={<ProductDetailPanel></ProductDetailPanel>} />
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
