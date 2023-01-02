import React from 'react';
import ShopListCard from './SubComponents/ShopListCard';
import SideBar from './SubComponents/SideBar';
import {useSelector} from "react-redux";
import { getAllProductsAction } from '../../actions/productActions';
import {useDispatch} from "react-redux"
import { useEffect } from 'react';

const ShopListPanel = () => {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllProductsAction());
    },[])
    const products=useSelector(state=>state.products);
    //useSelector
    return (
        <div className="shop-main-wrapper pt-40 pb-40">
            <div className="container custom-container">
                <div className="row">
                    {/* sidebar area start */}
                    
                       <SideBar></SideBar>
                       
                    
                    {/* sidebar area end */}
                    {/* shop main wrapper start */}
                    <div className="col-lg-9 order-1 order-lg-2">
                        <div className="shop-product-wrapper">
                            {/* shop page header banner start */}
                            <div className="shop-header-banner pb-40">
                                <img src="assets/img/banner/fruits-vegetables.jpg" alt="fruits and vegetables" />
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
                                {products.map((product,index)=><ShopListCard product={product} key={index}/>)}


                                
                                
                                
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