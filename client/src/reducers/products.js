import { GET_ALL_PRODUCTS } from "../constants/actionType";
export default (products={},action)=>{
    console.log("Reducer: ", product, action);
    switch(action.type){
        case GET_ALL_PRODUCTS:
            {
            console.log("GET_ALL_PRODUCTS REDUCER");
            console.log(action.payload)
            return products;
            }
        default:
                return products;
                //default must return posts, otherwise there will be some issues
        }
    }
    