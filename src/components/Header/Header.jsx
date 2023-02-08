import React from 'react';

import "./Header.css"
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getAllCartItemsAction } from '../../actions/cartItemActions';
import { useDispatch } from 'react-redux';
// import { keepLoginStateActi } from '../../api';
import { keepLoginStateAction } from '../../actions/userActions';
import { getProductByCategoryAction } from '../../actions/productActions';

const Header = () => {
    const currentUserStore=useSelector(state=>state.currentUser);
    const [currentUser,setCurrentUser]=useState({name:"guest ",loggedIn:false});
    const cartItemsStore=useSelector(state=>state.cartItems);
    const [cartItems,setCartItems]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(currentUserStore.name){
            setCurrentUser({...currentUserStore.user,loggedIn:currentUserStore.loggedIn});
        }
        
        console.log(currentUserStore);
        if(currentUserStore.loggedIn && cartItems.length===0){
            console.log("dispatch get All cart items");
            dispatch(getAllCartItemsAction(currentUserStore.user.id));
        }

    },[currentUserStore]);

    useEffect(()=>{
        setCartItems(cartItemsStore);
    },[cartItemsStore]);

    //get currentUser
    const state=useSelector(state=>state);

    useEffect(()=>{
        if(state.currentUser && !state.currentUser.loggedIn){
            //no longer loggedin
            const currentUserStorage=JSON.parse(localStorage.getItem('currentUser'));
            dispatch(keepLoginStateAction(currentUserStorage))
        }
    },[state]);

    function handleCheckOut(){
        localStorage.clear();
    }

    return (
        // header component
        <div>
            <header className="header-area">
                {/* main header start */}
                <div className="main-header d-none d-lg-block">
                    {/* header top start */}
                    <div className="header-top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="welcome-message">
                                        <p>Welcome to Aurora Online Shopping Store !</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="header-top-settings">
                                        <ul className="nav align-items-center">
                                            <li className="account-settings">
                                                {currentUser?"Hello, "+(currentUser.name?currentUser.name:"guest")+" ":"Hello, guest"+" "}
                                                {/* My Account */}
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list account-list">
                                                    
                                                    {!currentUser.loggedIn && (<li><a href="/login-or-signup">Log in</a></li>)}
                                                    <li><a href="/login-or-signup">Sign up</a></li>
                                                    {currentUser.loggedIn && (<li><a href="/cart">wishlist & cart</a></li>)}
                                                    {currentUser.loggedIn && (<li><a href="/checkout">checkout</a></li>)}
                                                    {currentUser.loggedIn &&(<li><a onClick={handleCheckOut} href="/">log out</a></li>)}
                                                </ul>
                                            </li>
                                        
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* header top end */}
                    {/* header middle area start */}
                    <div className="header-middle-area">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* start logo area */}
                                <div className="col-lg-3">
                                    <div className="logo">
                                        <a href="/">

                                            <img className="logo-img" src="logo.png" alt="logo" />
                                            {/* <img src="../" alt="" /> */}
                                        </a>
                                        <p className="logo-text">Aurora</p>
                                    </div>
                                </div>
                                {/* start logo area */}
                                {/* start search box area */}
                                <div className="col-lg-6">
                                    <div className="search-box-wrapper">
                                        <div className="search-box-inner-wrap">
                                            <form className="search-box-inner">
                                                <div className="search-field-wrap">
                                                    <input type="text" className="search-field"
                                                        placeholder="Enter your search key" />
                                                </div>
                                                <div className="search-select-box">
                                                    <select>
                                                        <optgroup label="Category">
                                                            <option value="volvo">All categories</option>
                                                            <option value="saab">Laptop</option>
                                                            <option value="saab">Graphic Card</option>
                                                            <option value="saab">CPU</option>
                                            
                                                        </optgroup>
                                                        <optgroup label="Brand">
                                                            <option value="mercedes">All brands</option>
                                                            <option value="audi">Dell</option>
                                                            <option value="audi">Asus</option>
                                                            <option value="audi">Nvidia</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                                <div className="search-btn">
                                                    <button><i className="ion-ios-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* start search box end */}
                                {/* mini cart area start */}
                                <div className="col-lg-3 ml-auto">
                                    <div className="header-configure-area">
                                        <ul className="nav justify-content-end">
                                            <li>
                                                <a href="wishlist.html">
                                                    <i className="ion-android-favorite-outline" />
                                                    <span className="notification">0</span>
                                                </a>
                                            </li>
                                            <li className="mini-cart-wrap">
                                                <a href="cart.html">
                                                    <i className="ion-bag" />
                                                    <span className="notification">2</span>
                                                </a>
                                                <ul className="cart-list">
                                                    {cartItems.map((cartItem,index)=>{
                                                        return (
                                                            <li key={index}>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img
                                                                src={cartItem.product.image} alt="Cart item image" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h4><a href="product-details.html">{cartItem.product.name}</a></h4>
                                                            <span className="cart-qty">Qty: {cartItem.cartItem.quantity}</span>
                                                            <span>${cartItem.product.price}</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </li>
                                                        );
                                                    })
                                                    }
                                                    
                                                    <li className="mini-cart-price">
                                                        <span className="subtotal">subtotal : </span>
                                                        <span className="subtotal-price ml-auto">$110.00</span>
                                                    </li>
                                                    <li>
                                                        <div className="mini-cart-button">
                                                            <a className="check-btn" href="/cart">View Cart</a>
                                                            <a className="check-btn" href="/checkout">checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* mini cart area end */}
                            </div>
                        </div>
                    </div>
                    {/* header middle area end */}
                    {/* main menu area start */}
                    <div className="main-menu-area theme-color-2 sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                
                                <div className="col-lg-10">
                                    <div className="main-menu home-main">
                                        {/* main menu navbar start */}
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className="active"><a href="/">Home</a>
                                                    {/* <ul className="dropdown">
                                                    
                                                        <li><a href="index.html">Home version 01<i
                                                    className="fa fa-angle-down" /></a></li>
                                                        <li><a href="index-2.html">Home version 02</a></li>
                                                        <li><a href="index-3.html">Home version 03</a></li>
                                                        <li><a href="index-4.html">Home version 04</a></li>
                                                        <li><a href="index-5.html">Home version 05</a></li>
                                                        <li><a href="index-6.html">Home version 06</a></li>
                                                    </ul> */}
                                                </li>
                                                {/* I called the getProductByCategoryIdAction, the schema in database should remain:
                                                Laptop-5 
                                                Graphic Card-6
                                                CPU-7  */}

                                                <li onClick={dispatch(getProductByCategoryAction(5))}><a href="/" >Laptop</a>
                                                    
                                                </li>
                                                <li onClick={dispatch(getProductByCategoryAction(6))}><a href="/">Graphic Card</a>
                                                    
                                                </li>
                                                <li onClick={dispatch(getProductByCategoryAction(7))}><a href="/">CPU</a>
                                                    
                                                </li>
                                                <li><a href="contact-us.html">Contact us</a></li>
                                            </ul>
                                        </nav>
                                        {/* main menu navbar end */}
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="contact-top">
                                        <div className="contact-top-icon">
                                            <img src="assets/img/icon/download.png" alt="" />
                                        </div>
                                        <div className="contact-top-info">
                                            <p>Contact me</p>
                                            <a href="mailto:prophet12505@gmail.com">prophet12505@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* main menu area end */}
                </div>
                {/* main header start */}
                {/* mobile header start */}
                <div className="mobile-header d-lg-none d-md-block sticky">
                    {/*mobile header top start */}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="mobile-header-top">
                                    <div className="header-top-settings">
                                        <ul className="nav align-items-center justify-content-center">
                                            <li className="account-settings">
                                                My account
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list account-list">
                                                    <li><a href="#">my account</a></li>
                                                    <li><a href="/login-or-signup">login register</a></li>
                                                    <li><a href="/cart">My cart</a></li>
                                                    <li><a href="/checkout">checkout</a></li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-main-header">
                                    <div className="mobile-logo">
                                        <a href="index.html">
                                            <div className='col-sm-6'>
                                            <img className="logo-img-mb" src="logo.png" alt="Brand Logo" />
                                            </div>
                                            {/* <div className='col-sm-6'><p >Aurora</p></div> */}
                                        </a>
                                    </div>
                                    <div className="mobile-menu-toggler">
                                        <div className="mini-cart-wrap">
                                            <a href="/cart">
                                                <i className="ion-bag" />
                                                <span className="notification">2</span>
                                            </a>
                                        </div>
                                        <div className="mobile-menu-btn">
                                            <div className="off-canvas-btn">
                                                <i className="ion-android-menu" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="category-toggle-wrap">
                                    <div className="category-toggle">
                                        <i className="ion-android-menu" />
                                        all categories
                                        <span><i className="ion-android-arrow-dropdown" /></span>
                                    </div>
                                   {/* category menu to be completed */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile header top start */}
                </div>
                {/* mobile header end */}
            </header>
        </div>
    );
};

export default Header;