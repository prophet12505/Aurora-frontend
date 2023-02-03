import axios from "axios";


//local url
//const url='http://localhost:8080/create-a-product'
//heroku url
const url='https://aurora--online-shopping-websit.herokuapp.com/create-a-product'

// const url="https://sirus--social-media.herokuapp.com/posts"//hosted on heroku

//Home page apis

export const createProduct=(product)=>{
    try {
        const res=axios.post(url,product);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}