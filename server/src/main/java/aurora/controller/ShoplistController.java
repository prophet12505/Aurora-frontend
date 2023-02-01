package aurora.controller;

import aurora.DTO.CartItemDTO;
import aurora.entity.CartItem;
import aurora.entity.Product;
import aurora.entity.ProductCategory;
import aurora.service.CartItemService;
import aurora.service.CategoryService;
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
    @Autowired
    CategoryService categoryService;

    @Autowired
    CartItemService cartItemService;

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

    @GetMapping("/categories/all")
    public List<ProductCategory> getAllCategories(){
        return categoryService.getAllProductCategories();
    }

    @GetMapping("/get-product-by-category")
    public  List<Product> getProductByCategoryID(@RequestParam(name="categoryId",defaultValue = "2") long categoryId){
        return productService.getProductsByCategoryId(categoryId);
    }

    // to be refactored: change it to postmapping
    @GetMapping("/cart/add-to-cart")
    public CartItem addToCart(@RequestParam(name = "userId") long userId,@RequestParam(name = "productId") long productId, @RequestParam(name="quantity") int quantity){
        return cartItemService.addToCart(userId,productId,quantity);

    }

    // to be finished
    @GetMapping("/cart/get-cart-items-by-userid")
    public List<CartItemDTO> getCartItemsByUserId(@RequestParam(name="userId") long userId){
        //return two object instead of one, fix it

        return cartItemService.getCartItemsByUserId(userId);

    }


}
