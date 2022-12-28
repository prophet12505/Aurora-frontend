import React from 'react';
import "../assets/css/style.css";
import "../css/vendor.css";
//./src/assets/css/style.css
const Header = () => {
    return (
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
                                        <p>Welcome to Ostromi Online Shopping Store !</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="header-top-settings">
                                        <ul className="nav align-items-center">
                                            <li className="account-settings">
                                                My account
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list account-list">
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="login-register.html">login register</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                </ul>
                                            </li>
                                            <li className="curreny-wrap">
                                                $ USD
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list curreny-list">
                                                    <li><a href="#">$ usd</a></li>
                                                    <li><a href="#"> € EURO</a></li>
                                                </ul>
                                            </li>
                                            <li className="language">
                                                <img src="assets/img/icon/en.png" alt="" />
                                                English
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list">
                                                    <li><a href="#"><img src="assets/img/icon/en.png"
                                                        alt="" /> english</a></li>
                                                    <li><a href="#"><img src="assets/img/icon/fr.png"
                                                        alt="" /> french</a>
                                                    </li>
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
                                        <a href="index.html">
                                            <img src="../assets/img/logo/logo.png" alt="logo" />
                                            {/* <img src="../a" alt="" /> */}
                                            {/* <img src="../" alt="" /> */}
                                        </a>
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
                                                        <optgroup label="organic food">
                                                            <option value="volvo">All categories</option>
                                                            <option value="saab">watch</option>
                                                            <option value="saab">air cooler</option>
                                                            <option value="saab">audio</option>
                                                            <option value="saab">speakers</option>
                                                            <option value="saab">amplifires</option>
                                                        </optgroup>
                                                        <optgroup label="Fashion">
                                                            <option value="mercedes">Womens tops</option>
                                                            <option value="audi">Jeans</option>
                                                            <option value="audi">Shirt</option>
                                                            <option value="audi">Pant</option>
                                                            <option value="audi">Watch</option>
                                                            <option value="audi">Handbag</option>
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
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img
                                                                src="assets/img/cart/cart-1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h4><a href="product-details.html">simple product</a></h4>
                                                            <span className="cart-qty">Qty: 1</span>
                                                            <span>$60.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cart-img">
                                                            <a href="product-details.html"><img
                                                                src="assets/img/cart/cart-2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h4><a href="product-details.html">virtual product</a></h4>
                                                            <span className="cart-qty">Qty: 2</span>
                                                            <span>$100.00</span>
                                                        </div>
                                                        <div className="del-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                    </li>
                                                    <li className="mini-cart-price">
                                                        <span className="subtotal">subtotal : </span>
                                                        <span className="subtotal-price ml-auto">$110.00</span>
                                                    </li>
                                                    <li>
                                                        <div className="mini-cart-button">
                                                            <a className="check-btn" href="cart.html">View Cart</a>
                                                            <a className="check-btn" href="checkout.html">checkout</a>
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
                                <div className="col-lg-3">
                                    <div className="category-toggle-wrap">
                                        <div className="category-toggle">
                                            <i className="ion-android-menu" />
                                            all categories
                                            <span><i className="ion-android-arrow-dropdown" /></span>
                                        </div>
                                        <nav className="category-menu">
                                            <ul className="categories-list">
                                                <li className="menu-item-has-children"><a href="shop.html">Fruits &amp;
                                                    Vegetables</a>
                                                    {/* Mega Category Menu Start */}
                                                    <ul className="category-mega-menu dropdown">
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">Smartphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Samsome</a></li>
                                                                <li><a href="shop.html">GL Stylus</a></li>
                                                                <li><a href="shop.html">Uawei</a></li>
                                                                <li><a href="shop.html">Cherry Berry</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">headphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Desktop Headphone</a></li>
                                                                <li><a href="shop.html">Mobile Headphone</a></li>
                                                                <li><a href="shop.html">Wireless Headphone</a></li>
                                                                <li><a href="shop.html">LED Headphone</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">accessories</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Power Bank</a></li>
                                                                <li><a href="shop.html">Data Cable</a></li>
                                                                <li><a href="shop.html">Power Cable</a></li>
                                                                <li><a href="shop.html">Battery</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">headphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Desktop Headphone</a></li>
                                                                <li><a href="shop.html">Mobile Headphone</a></li>
                                                                <li><a href="shop.html">Wireless Headphone</a></li>
                                                                <li><a href="shop.html">LED Headphone</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    {/* Mega Category Menu End */}
                                                </li>
                                                <li className="menu-item-has-children"><a href="shop.html">Fresh
                                                    Meat</a>
                                                    {/* Mega Category Menu Start */}
                                                    <ul className="category-mega-menu dropdown three-column">
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">Smartphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Samsome</a></li>
                                                                <li><a href="shop.html">GL Stylus</a></li>
                                                                <li><a href="shop.html">Uawei</a></li>
                                                                <li><a href="shop.html">Cherry Berry</a></li>
                                                                <li><a href="shop.html">uPhone</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">headphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Desktop Headphone</a></li>
                                                                <li><a href="shop.html">Mobile Headphone</a></li>
                                                                <li><a href="shop.html">Wireless Headphone</a></li>
                                                                <li><a href="shop.html">LED Headphone</a></li>
                                                                <li><a href="shop.html">Over-ear</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">accessories</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Power Bank</a></li>
                                                                <li><a href="shop.html">Data Cable</a></li>
                                                                <li><a href="shop.html">Power Cable</a></li>
                                                                <li><a href="shop.html">Battery</a></li>
                                                                <li><a href="shop.html">OTG Cable</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    {/* Mega Category Menu End */}
                                                </li>
                                                <li className="menu-item-has-children"><a
                                                    href="shop.html">dairy &amp; eggs</a>
                                                    {/* Mega Category Menu Start */}
                                                    <ul className="category-mega-menu dropdown two-column">
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">Smartphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Samsome</a></li>
                                                                <li><a href="shop.html">GL Stylus</a></li>
                                                                <li><a href="shop.html">Uawei</a></li>
                                                                <li><a href="shop.html">Cherry Berry</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="shop.html">headphone</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Desktop Headphone</a></li>
                                                                <li><a href="shop.html">Mobile Headphone</a></li>
                                                                <li><a href="shop.html">Wireless Headphone</a></li>
                                                                <li><a href="shop.html">LED Headphone</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    {/* Mega Category Menu End */}
                                                </li>
                                                <li><a href="shop.html">Frozen</a></li>
                                                <li><a href="shop.html">Grocery</a></li>
                                                <li><a href="shop.html">Kitchenware</a></li>
                                                <li><a href="shop.html">Tools</a></li>
                                                <li><a href="shop.html">Electronics</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="main-menu home-main">
                                        {/* main menu navbar start */}
                                        <nav className="desktop-menu">
                                            <ul>
                                                <li className="active"><a href="index.html">Home <i
                                                    className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="index.html">Home version 01</a></li>
                                                        <li><a href="index-2.html">Home version 02</a></li>
                                                        <li><a href="index-3.html">Home version 03</a></li>
                                                        <li><a href="index-4.html">Home version 04</a></li>
                                                        <li><a href="index-5.html">Home version 05</a></li>
                                                        <li><a href="index-6.html">Home version 06</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">pages <i className="fa fa-angle-down" /></a>
                                                    <ul className="megamenu dropdown">
                                                        <li className="mega-title"><a href="#">column 01</a>
                                                            <ul>
                                                                <li><a href="shop.html">shop grid left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-grid-right-sidebar.html">shop grid
                                                                    right
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-left-sidebar.html">shop list left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-right-sidebar.html">shop list
                                                                    right
                                                                    sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 02</a>
                                                            <ul>
                                                                <li><a href="product-details.html">product details</a>
                                                                </li>
                                                                <li><a href="product-details-affiliate.html">product
                                                                    details
                                                                    affiliate</a></li>
                                                                <li><a href="product-details-variable.html">product
                                                                    details
                                                                    variable</a></li>
                                                                <li><a href="product-details-group.html">product details
                                                                    group</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 03</a>
                                                            <ul>
                                                                <li><a href="cart.html">cart</a></li>
                                                                <li><a href="checkout.html">checkout</a></li>
                                                                <li><a href="compare.html">compare</a></li>
                                                                <li><a href="wishlist.html">wishlist</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-title"><a href="#">column 04</a>
                                                            <ul>
                                                                <li><a href="my-account.html">my-account</a></li>
                                                                <li><a href="login-register.html">login-register</a>
                                                                </li>
                                                                <li><a href="about-us.html">about us</a></li>
                                                                <li><a href="contact-us.html">contact us</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">shop <i className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">shop grid layout <i
                                                            className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">shop grid left sidebar</a></li>
                                                                <li><a href="shop-grid-right-sidebar.html">shop grid
                                                                    right
                                                                    sidebar</a></li>
                                                                <li><a href="shop-grid-full-3-col.html">shop grid full 3
                                                                    col</a></li>
                                                                <li><a href="shop-grid-full-4-col.html">shop grid full 4
                                                                    col</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">shop list layout <i
                                                            className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop-list-left-sidebar.html">shop list left
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-right-sidebar.html">shop list
                                                                    right
                                                                    sidebar</a></li>
                                                                <li><a href="shop-list-full-width.html">shop list full
                                                                    width</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">products details <i
                                                            className="fa fa-angle-right" /></a>
                                                            <ul className="dropdown">
                                                                <li><a href="product-details.html">product details</a>
                                                                </li>
                                                                <li><a href="product-details-affiliate.html">product
                                                                    details
                                                                    affiliate</a></li>
                                                                <li><a href="product-details-variable.html">product
                                                                    details
                                                                    variable</a></li>
                                                                <li><a href="product-details-group.html">product details
                                                                    group</a></li>
                                                                <li><a href="product-details-box.html">product details
                                                                    box</a></li>
                                                                <li><a href="product-details-sticky-left.html">product
                                                                    details sticky left</a></li>
                                                                <li><a href="product-details-sticky-right.html">product
                                                                    details sticky right</a></li>
                                                                <li><a href="product-details-gallery-left.html">product
                                                                    details gallery left</a></li>
                                                                <li><a href="product-details-gallery-right.html">product
                                                                    details gallery right</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog-left-sidebar.html">Blog <i
                                                    className="fa fa-angle-down" /></a>
                                                    <ul className="dropdown">
                                                        <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                                        <li><a href="blog-left-sidebar-2-col.html">blog left sidebar 2
                                                            col</a></li>
                                                        <li><a href="blog-right-sidebar.html">blog right sidebar</a>
                                                        </li>
                                                        <li><a href="blog-right-sidebar-2-col.html">blog right sidebar 2
                                                            col</a></li>
                                                        <li><a href="blog-grid-full-width.html">blog grid full width</a>
                                                        </li>
                                                        <li><a href="blog-list-full-width.html">blog list full width</a>
                                                        </li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                        <li><a href="blog-details-left-sidebar.html">blog details left
                                                            sidebar</a></li>
                                                        <li><a href="blog-details-audio.html">blog details audio</a>
                                                        </li>
                                                        <li><a href="blog-details-video.html">blog details video</a>
                                                        </li>
                                                        <li><a href="blog-details-image.html">blog details image</a>
                                                        </li>
                                                    </ul>
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
                                            <p>call us now</p>
                                            <a href="#">+88.2345.6789</a>
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
                                                    <li><a href="#">login register</a></li>
                                                    <li><a href="#">wishlist</a></li>
                                                    <li><a href="#">checkout</a></li>
                                                </ul>
                                            </li>
                                            <li className="curreny-wrap">
                                                $ USD
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list curreny-list">
                                                    <li><a href="#">$ usd</a></li>
                                                    <li><a href="#"> € EURO</a></li>
                                                </ul>
                                            </li>
                                            <li className="language">
                                                <img src="assets/img/icon/en.png" alt="" />
                                                English
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-list">
                                                    <li><a href="#"><img src="assets/img/icon/en.png"
                                                        alt="" /> english</a></li>
                                                    <li><a href="#"><img src="assets/img/icon/fr.png"
                                                        alt="" /> french</a>
                                                    </li>
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
                                            <img src="../assets/img/logo/logo.png" alt="Brand Logo" />
                                            
                                        </a>
                                    </div>
                                    <div className="mobile-menu-toggler">
                                        <div className="mini-cart-wrap">
                                            <a href="cart.html">
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
                                    <nav className="category-menu">
                                        <ul className="categories-list">
                                            <li className="menu-item-has-children"><a href="shop.html">Fruits &amp;
                                                Vegetables</a>
                                                {/* Mega Category Menu Start */}
                                                <ul className="category-mega-menu dropdown">
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">Smartphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Samsome</a></li>
                                                            <li><a href="shop.html">GL Stylus</a></li>
                                                            <li><a href="shop.html">Uawei</a></li>
                                                            <li><a href="shop.html">Cherry Berry</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">headphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Desktop Headphone</a></li>
                                                            <li><a href="shop.html">Mobile Headphone</a></li>
                                                            <li><a href="shop.html">Wireless Headphone</a></li>
                                                            <li><a href="shop.html">LED Headphone</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">accessories</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Power Bank</a></li>
                                                            <li><a href="shop.html">Data Cable</a></li>
                                                            <li><a href="shop.html">Power Cable</a></li>
                                                            <li><a href="shop.html">Battery</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">headphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Desktop Headphone</a></li>
                                                            <li><a href="shop.html">Mobile Headphone</a></li>
                                                            <li><a href="shop.html">Wireless Headphone</a></li>
                                                            <li><a href="shop.html">LED Headphone</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                {/* Mega Category Menu End */}
                                            </li>
                                            <li className="menu-item-has-children"><a href="shop.html">Fresh Meat</a>
                                                {/* Mega Category Menu Start */}
                                                <ul className="category-mega-menu dropdown three-column">
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">Smartphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Samsome</a></li>
                                                            <li><a href="shop.html">GL Stylus</a></li>
                                                            <li><a href="shop.html">Uawei</a></li>
                                                            <li><a href="shop.html">Cherry Berry</a></li>
                                                            <li><a href="shop.html">uPhone</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">headphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Desktop Headphone</a></li>
                                                            <li><a href="shop.html">Mobile Headphone</a></li>
                                                            <li><a href="shop.html">Wireless Headphone</a></li>
                                                            <li><a href="shop.html">LED Headphone</a></li>
                                                            <li><a href="shop.html">Over-ear</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">accessories</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Power Bank</a></li>
                                                            <li><a href="shop.html">Data Cable</a></li>
                                                            <li><a href="shop.html">Power Cable</a></li>
                                                            <li><a href="shop.html">Battery</a></li>
                                                            <li><a href="shop.html">OTG Cable</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                {/* Mega Category Menu End */}
                                            </li>
                                            <li className="menu-item-has-children"><a
                                                href="shop.html">dairy &amp; eggs</a>
                                                {/* Mega Category Menu Start */}
                                                <ul className="category-mega-menu dropdown two-column">
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">Smartphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Samsome</a></li>
                                                            <li><a href="shop.html">GL Stylus</a></li>
                                                            <li><a href="shop.html">Uawei</a></li>
                                                            <li><a href="shop.html">Cherry Berry</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="shop.html">headphone</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Desktop Headphone</a></li>
                                                            <li><a href="shop.html">Mobile Headphone</a></li>
                                                            <li><a href="shop.html">Wireless Headphone</a></li>
                                                            <li><a href="shop.html">LED Headphone</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                {/* Mega Category Menu End */}
                                            </li>
                                            <li><a href="shop.html">Frozen</a></li>
                                            <li><a href="shop.html">Grocery</a></li>
                                            <li><a href="shop.html">Kitchenware</a></li>
                                            <li><a href="shop.html">Tools</a></li>
                                            <li><a href="shop.html">Electronics</a></li>
                                        </ul>
                                    </nav>
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