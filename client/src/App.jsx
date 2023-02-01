import logo from './logo.svg';
import './App.css';

import "./css/vendor.css";
import "./css/style.css";
import Header from "./components/Header/Header";
import ShopListPanel from "./components/ShopListPanel/ShopListPanel";
import CartPanel from "./components/CartPanel/CartPanel";
import CheckOutPanel from "./components/CheckOutPanel/CheckOutPanel";
import ProductDetailPanel from "./components/ProductDetailPanel/ProductDetailPanel";
import LoginOrSignupPanel from './components/LoginOrSignupPanel/LoginOrSignupPanel';
import EmailVerificationSuccessPanel from './components/LoginOrSignupPanel/EmailVerificationSuccessPanel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { keepLoginStateAction } from './actions/userActions';
import { useSelector } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  //any state changes would be verified and keeped user state alive
  
  const state=useSelector(state=>state);
  useEffect(()=>{
    const token= localStorage.getItem('userToken');
    if(token){
      dispatch(keepLoginStateAction(token));
    }
  },[state.message,state.products,state.selectedProduct,state.categories,state.cartItems]);


  return (<div className="App">
              <BrowserRouter>
        <Header></Header>
        {/* <ul>
            <li><a href="/cart">CartPanel</a></li>
            <li><a href="/checkout">CheckOutPanel</a></li>
            <li><a href="/login-or-signup">LoginOrSignupPanel</a></li>
            <li><a href="/product-detail">ProductDetailPanel</a></li>
        </ul> */}
            <Routes>
                    <Route path="/" element={<ShopListPanel></ShopListPanel>} />
                    <Route path="/verify-email" element={<EmailVerificationSuccessPanel/>}></Route>
                    <Route path="/products/all" element={<ShopListPanel></ShopListPanel>} />
                    <Route path="/products/details" element={<ProductDetailPanel></ProductDetailPanel>} />
                    <Route path="/cart"element={<CartPanel></CartPanel>} />
                    <Route path="/checkout" element={<CheckOutPanel></CheckOutPanel>} />
                    <Route path="/login-or-signup" element={<LoginOrSignupPanel></LoginOrSignupPanel>} />
                <Route path="/products/{id}" element={<ProductDetailPanel></ProductDetailPanel>} />
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
