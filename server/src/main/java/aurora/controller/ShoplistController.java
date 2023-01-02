package aurora.controller;

import aurora.entity.Product;
import aurora.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ShoplistController {


    @Autowired
    ProductService productService;
    @GetMapping("/products")
    public List<Product> getAllProducts(){
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
}
