import React from "react"
import { useDispatch } from 'react-redux'
import { createProductAction } from "../../actions/productAction";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import FileBase from 'react-file-base64'
import "./Form.css"


// title:String,
// message:String,
// creater:String,
// tags:[String],
// selectedFile:String,



const Form= ()=>{
    const [postProduct,setPostProduct]=useState({
        name:'',
        description:'',
        image:'',
        active:true,
        brand:'',
        price:0.1,
        unitsInStock:99,
        category:[]
    });

    const dispatch=useDispatch();
    //notice: useEffect will refresh the page in the very beginning even if post is null, at that time postProduct will be null
    //we must add validation to make sure that we won't set null to our useState hook, so we must add null validation
    //useEffect will be triggered in the very beginning, at that time, post is still null.

    //set postProduct to empty state


    const handleSubmit=(e)=>{
        

        e.preventDefault();
        dispatch(createProductAction(postProduct));
    }
    const clear=()=>{
        setPostProduct({ 
            name:'',
            description:'',
            image:'',
            active:true,
            brand:'',
            price:0.1,
            unitsInStock:99,
            category:[]
    });
    }
    return (
        <>
            <form >
                {/* <p className="p-heading">Form</p> */}
                <label  >Product Name </label> 
                <input className="input-line-text" type="text" name="name" placeholder="name" maxLength="25" value={postProduct.name} onChange={(e)=>{setPostProduct({...postProduct,name:e.target.value})}}/>
                <label>Description</label>
                <input className="input-line-text" type="text" name="description" placeholder="description" value={postProduct.description} id="description" onChange={(e)=>{setPostProduct({...postProduct,description:e.target.value})}}/>
                <label>Brand</label>
                <input className="input-line-text" type="text" name="brand" placeholder="brand" value={postProduct.brand} onChange={(e)=>{setPostProduct({...postProduct,brand:e.target.value})}}/>
                <label>Price</label>
                <input className="input-line-text" type="text" name="price" placeholder="price" value={postProduct.price} onChange={(e)=>{setPostProduct({...postProduct,price:e.target.value})}}/>
                <label>Category</label>
                <input className="input-line-text" type="text" name="category" placeholder="category" value={postProduct.category} onChange={(e)=>{setPostProduct({...postProduct,category:e.target.value.split(',')})}}/>
                <label>UnitsInStock</label>
                <input className="input-line-text" type="text" name="units-in-stock" placeholder="unitsInStock" value={postProduct.unitsInStock} onChange={(e)=>{setPostProduct({...postProduct,unitsInStock:e.target.value})}}/>
                <FileBase className="btn btn-white" type="file" multiple={false} value={postProduct.image} onDone={({ base64 }) => setPostProduct({ ...postProduct, image: base64 })} />
                <button className="btn btn-green" type="submit" onClick={handleSubmit}>Let's go!</button>
            </form>
        </>
        );
}
export default Form;