import { GET_ALL_CATEGORIES } from "../constants/actionTypes";
export default (categories=[],action)=>{
    // console.log("GET_ALL_CATEGORIES reducer");
    // console.log(categories);
    switch(action.type){
        case GET_ALL_CATEGORIES:
            {
                return action.payload;
            }
        default:
            return categories;
        }
}