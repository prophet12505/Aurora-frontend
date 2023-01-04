import React from 'react'
import {useSelector} from "react-redux";
// import { getProductDetailByClickAction } from '../../actions/productActions';
import { getProductDetailByClickAction } from '../../../actions/productActions';
import {useDispatch} from "react-redux"
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
const ShopListCard = ({product}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // useEffect(()=>{
    //     dispatch(getProductDetailByClickAction(product));
    // },[])
    function handleOpenDetail(){
        console.log("productID:")
        console.log(product.id);
        // navigate('/product-detail');
        //dispatch(getProductDetailByClickAction(product.id));
    }
    

  return (
    <div className="col-md-4 col-sm-6">
                                    {/* product grid start */}
                                    <div className="product-item mb-30">
                                        <div className="product-thumb">
                                            <a href={'/products/details?id='+product.id} >
                                                {/* <img src="assets/img/product/product-1.jpg" alt="" /> */}
                                                <img src={product.image}  alt="product image" />
                                                
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
                                                    <h5><a href="product-details.html">{product.name}</a></h5>
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
                                                    <span className="price-regular">${product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product grid end */}
                                    {/* product list item end */}
                                    <div className="product-list-item mb-30">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                {/* <img src="assets/img/product/product-1.jpg" alt="" /> */}
                                                <img src={product.image} alt="product image" />
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
                                            <h5 className="product-name"><a href="product-details.html">{product.name}</a></h5>
                                            <div className="ratings">
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                                <span><i className="ion-android-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-old"><del>${product.price*1.1}</del></span>
                                                <span className="price-regular">${product.price}</span>
                                            </div>
                                            <p>{product.description}</p>
                                            <div className="product-list-link">
                                                <a href="checkout.html" data-bs-toggle="tooltip" title="Add to Cart" data-bs-placement="top" className="add-btn">Add to cart</a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" title="Quick View" data-bs-placement="top"><i className="ion-ios-eye-outline" /></span></a>
                                                <a href="wishlist.html" data-bs-toggle="tooltip" title="Wishlist" data-bs-placement="top"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div> {/* product list item end */}
                                </div>
      )
}

export default ShopListCard