import { GET_PRODUCT_DETAIL_BY_CLICK } from "../constants/actionTypes";
export default (selectedProduct={
    name:'Loading...',
    description:'',
    image:'',
    price:'0',
    unitInStock:99,
    
},action)=>{
    // console.log("Reducer: ", selectedProduct, action);
    switch(action.type){
        case GET_PRODUCT_DETAIL_BY_CLICK:
            {
                console.log("GET_PRODUCT_DETAIL_BY_CLICK REDUCER");
                console.log(action.payload);
                return action.payload;
            }
        default:
                return selectedProduct;
                //default must return posts, otherwise there will be some issues
        }
    }
    