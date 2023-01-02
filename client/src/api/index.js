const url="http://localhost:8080"
export const fetchAllProducts=()=>{
    try {
        const res=axios.get(url+"/products");
        //console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}