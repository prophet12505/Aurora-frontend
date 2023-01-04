package aurora.controller;

import aurora.entity.Product;
import aurora.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ShoplistController {


    @Autowired
    ProductService productService;


    @GetMapping("/products/all")
    public List<Product> getAllProducts(){
        System.out.println("getAllProducts");
        List<Product>res;
        try{
            res= productService.getAllProducts();
            return res;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    //default value of request parameter has to be a string instead of number
    @GetMapping("/products/details")
    public Product getProductById(@RequestParam(name="id",defaultValue = "2") long id){
        System.out.println("getProductById");
        return  productService.getProductById(id);
    }


}
