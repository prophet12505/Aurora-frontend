import React from 'react';

import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { getAllCartItemsAction } from '../../actions/cartItemActions';
import { useDispatch } from 'react-redux';

const CartPanel = () => {
    const currentUserStore=useSelector(state=>state.currentUser);
    
    const cartItemsStore=useSelector(state=>state.cartItems);
    const [cartItems,setCartItems]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log(currentUserStore);
        if(currentUserStore.loggedIn && cartItems.length===0){
            console.log("dispatch get All cart items");
            dispatch(getAllCartItemsAction(currentUserStore.user.id));
        }
    },[currentUserStore]);
    useEffect(()=>{
        setCartItems(cartItemsStore);
    },[cartItemsStore]);
    var sum=0;
    return (
    <main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">cart</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* breadcrumb area end */}
        {/* cart main wrapper start */}
        <div className="cart-main-wrapper pt-40 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Cart Table Area */}
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th className="pro-thumbnail">Thumbnail</th>
                                    <th className="pro-title">Product</th>
                                    <th className="pro-price">Price</th>
                                    <th className="pro-quantity">Quantity</th>
                                    <th className="pro-subtotal">Total</th>
                                    <th className="pro-remove">Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                {
                                                
                                                cartItems.map((cartItem,index)=>{
                                                    sum+=cartItem.product.price*cartItem.cartItem.quantity;
                                                    return(
                                                        <tr>
                                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={cartItem.product.image} alt="Product" /></a></td>
                                                        <td className="pro-title"><a href="#">{cartItem.product.name}</a></td>
                                                        <td className="pro-price"><span>${cartItem.product.price}</span></td>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty"><input type="text" defaultValue={cartItem.cartItem.quantity} /></div>
                                                        </td>
                                                        <td className="pro-subtotal"><span>${cartItem.product.price*cartItem.cartItem.quantity}</span></td>
                                                        <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                                    </tr>
                                                    
                                                    );
                                                })}
                                </tbody>
                            </table>
                        </div>
                        {/* Cart Update Option */}
                        <div className="cart-update-option d-block d-md-flex justify-content-between">
                            <div className="apply-coupon-wrapper">
                                <form action="#" method="post" className=" d-block d-md-flex">
                                    <input type="text" placeholder="Enter Your Coupon Code" required />
                                    <button className="btn btn__bg btn__sqr">Apply Coupon</button>
                                </form>
                            </div>
                            <div className="cart-update">
                                <a href="#" className="btn btn__bg">Update Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 ml-auto">
                        {/* Cart Calculation Area */}
                        <div className="cart-calculator-wrapper">
                            <div className="cart-calculate-items">
                                <h3>Cart Totals</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody><tr>
                                            <td>Sub Total</td>
                                            <td>${sum}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>$70</td>
                                        </tr>
                                        <tr className="total">
                                            <td>Total</td>
                                            <td className="total-amount">${sum+70}</td>
                                        </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            <a href="checkout.html" className="btn btn__bg d-block">Proceed To Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* cart main wrapper end */}
    </main>
    )
};
export default CartPanel;