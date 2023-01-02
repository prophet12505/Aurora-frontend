import React from 'react'

const SideBar = () => {
  return (
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
</div>)
}

export default SideBar