import { CREATE_PRODUCT } from "../constants/actionType";
export default (product={},action)=>{
    console.log("Reducer: ", product, action);
    switch(action.type){
        case CREATE_PRODUCT:
            {
            console.log("CREATE_PRODUCT");
            console.log(action.payload)
            return product;
            }
        default:
                return product;
                //default must return posts, otherwise there will be some issues
        }
    }
    