import React from 'react';


const ShopListPanel = () => {
    return (
        <div className="shop-main-wrapper pt-40 pb-40">
            <div className="container custom-container">
                <div className="row">
                    {/* sidebar area start */}
                    <div className="col-lg-3 order-2 order-lg-1">
                        <aside className="sidebar-wrapper">
                            {/* single sidebar start */}
                            <div className="sidebar-single">
                                <div className="sidebar-title">
                                    <h3>categories</h3>
                                </div>
                                <div className="sidebar-body">
                                    {/* mobile menu navigation start */}
                                    <div className="shop-categories">
                                        <nav>
                                            <ul className="mobile-menu">
                                                <li className="menu-item-has-children"><a href="#">organic food</a>
                                                    <ul className="dropdown">
                                                        <li><a href="product-details.html">fresh food</a></li>
                                                        <li><a href="product-details.html">junk food</a></li>
                                                        <li><a href="product-details.html">wet food</a></li>
                                                        <li><a href="product-details.html">dry food</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="#">kitchen ware</a>
                                                    <ul className="dropdown">
                                                        <li><a href="product-details.html">fresh food</a></li>
                                                        <li><a href="product-details.html">junk food</a></li>
                                                        <li><a href="product-details.html">wet food</a></li>
                                                        <li><a href="product-details.html">dry food</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="#">hand tools</a>
                                                    <ul className="dropdown">
                                                        <li><a href="product-details.html">fresh food</a></li>
                                                        <li><a href="product-details.html">junk food</a></li>
                                                        <li><a href="product-details.html">wet food</a></li>
                                                        <li><a href="product-details.html">dry food</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="#">electronics</a>
                                                    <ul className="dropdown">
                                                        <li><a href="product-details.html">fresh food</a></li>
                                                        <li><a href="product-details.html">junk food</a></li>
                                                        <li><a href="product-details.html">wet food</a></li>
                                                        <li><a href="product-details.html">dry food</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* mobile menu navigation end */}
                                </div>
                            </div>
                            {/* single sidebar end */}
                            {/* single sidebar start */}
                            <div className="sidebar-single">
                                <div className="sidebar-title">
                                    <h3>Price filter</h3>
                                </div>
                                <div className="sidebar-body">
                                    <ul className="radio-container">
                                        <li>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" name="priceFilter" className="custom-control-input" id="customCheck11" />
                                                <label className="custom-control-label" htmlFor="customCheck11">$7.00 - $9.00 (2)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" name="priceFilter" className="custom-control-input" id="customCheck21" />
                                                <label className="custom-control-label" htmlFor="customCheck21">$10.00 - $12.00 (3)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" name="priceFilter" className="custom-control-input" id="customCheck31" />
                                                <label className="custom-control-label" htmlFor="customCheck31">$17.00 - $20.00 (3)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" name="priceFilter" className="custom-control-input" id="customCheck41" />
                                                <label className="custom-control-label" htmlFor="customCheck41"> $21.00 - $22.00 (1)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" name="priceFilter" className="custom-control-input" id="customCheck51" />
                                                <label className="custom-control-label" htmlFor="customCheck51">$25.00 - $30.00 (3)</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single sidebar end */}
                            {/* single sidebar start */}
                            <div className="sidebar-single">
                                <div className="sidebar-title">
                                    <h3>brand</h3>
                                </div>
                                <div className="sidebar-body">
                                    <ul className="checkbox-container">
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Graphic corner</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Studio</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">Hastech</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" htmlFor="customCheck4">Quickiin</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single sidebar end */}
                            {/* single sidebar start */}
                            <div className="sidebar-single">
                                <div className="sidebar-title">
                                    <h3>size</h3>
                                </div>
                                <div className="sidebar-body">
                                    <ul className="checkbox-container">
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck111" />
                                                <label className="custom-control-label" htmlFor="customCheck111">S (4)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck222" />
                                                <label className="custom-control-label" htmlFor="customCheck222">M (05)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck333" />
                                                <label className="custom-control-label" htmlFor="customCheck333">L (7)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck444" />
                                                <label className="custom-control-label" htmlFor="customCheck444">XL (3)</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single sidebar end */}
                            {/* single sidebar start */}
                            <div className="sidebar-banner">
                                <div className="banner-statistics-wrapper">
                                    <div className="banner-statistics">
                                        <div className="img-container">
                                            <a href="#">
                                                <img src="assets/img/banner/cms_1.1.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="banner-statistics">
                                        <div className="img-container">
                                            <a href="#">
                                                <img src="assets/img/banner/cms_1.2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single sidebar end */}
                        </aside>
                    </div>
                    {/* sidebar area end */}
                    {/* shop main wrapper start */}
                    <div className="col-lg-9 order-1 order-lg-2">
                        <div className="shop-product-wrapper">
                            {/* shop page header banner start */}
                            <div className="shop-header-banner pb-40">
                                <img src="assets/img/banner/fruits-vegetables.jpg" alt="" />
                            </div>
                            {/* shop page header end */}
                            {/* shop product top wrap start */}
                            <div className="shop-top-bar">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                                        <div className="top-bar-left">
                                            <div className="product-view-mode">
                                                <a className="active" href="#" data-target="grid-view"><i className="fa fa-th" /></a>
                                                <a href="#" data-target="list-view"><i className="fa fa-list" /></a>
                                            </div>
                                            <div className="product-amount">
                                                <p>Showing 1–16 of 21 results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                                        <div className="top-bar-right">
                                            <div className="product-short">
                                                <p>Sort By : </p>
                                                <select className="nice-select" name="sortby">
                                                    <option value="trending">Relevance</option>
                                                    <option value="sales">Name (A - Z)</option>
                                                    <option value="sales">Name (Z - A)</option>
                                                    <option value="rating">Price (Low &gt; High)</option>
                                                    <option value="date">Rating (Lowest)</option>
                                                    <option value="price-asc">Model (A - Z)</option>
                                                    <option value="price-asc">Model (Z - A)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* shop product top wrap start */}
                            {/* product item list start */}
                            <div className="shop-product-wrap grid-view row pt-40">
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-1.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-1.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-2.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-2.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-3.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-3.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-4.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-4.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-5.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-5.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-6.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-6.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-7.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-7.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-8.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-8.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-9.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-9.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-10.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-10.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-11.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-11.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                                {/* product single item start */}
                                <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-12.jpg" alt="" />
                                            </a>
                                            <div className="add-to-links">
                                                <a href="cart.html" data-bs-toggle="tooltip" title="Add to Cart"><i className="ion-bag" /></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-content">
                                                <div className="product-name">
                                                    <h5><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                                </div>
                                                <div className="ratings">
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                    <span><i className="ion-android-star" /></span>
                                                </div>
                                                <div className="price-box">
                                                    <span className="price-old"><del /></span>
                                                    <span className="price-regular">$50.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/img/product/product-12.jpg" alt="" />
                                            </a>
                                            <div className="product-badge product-badge__2">
                                                <div className="product-label new">
                                                    <span>new</span>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>-5%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content-list">
                                            <h5 className="product-name"><a href="product-details.html">Private Selection Wild Caught Jumbo Lump Crab</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>$90.00</del></span>
                                                <span className="price-regular">$70.00</span>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis
                                                quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis ullam
                                                rem, accusantium adipisci officia eaque.</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
                                {/* product single item start */}
                            </div>
                            {/* product item list end */}
                            {/* start pagination area */}
                            <div className="paginatoin-area text-center">
                                <ul className="pagination-box">
                                    <li><a className="previous" href="#"><i className="ion-ios-arrow-left" />Previous</a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a className="next" href="#">Next<i className="ion-ios-arrow-right" /></a></li>
                                </ul>
                            </div>
                            {/* end pagination area */}
                        </div>
                    </div>
                    {/* shop main wrapper end */}
                </div>
            </div>
        </div>

    );
}
export default ShopListPanel