package aurora.controller;

import aurora.DTO.CreateProductDTO;
import aurora.DTO.GeneralMessageDTO;
import aurora.service.ProductService;
import aurora.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DashBoardController {
    //    product related
    @Autowired
    private ProductService productService;

    @PostMapping("create-a-product")
    public GeneralMessageDTO createAProduct(@RequestBody CreateProductDTO createProductDTO){
        try{
            System.out.println("createProductDTO received");
            //System.out.println(createProductDTO);
            Long productId=productService.createAProduct(createProductDTO);
            List<Long> categoryIds=productService.createProductCategory(createProductDTO.getCategory());
            Boolean productToProductCategoryKeyRES=productService.createProductCategoryKey(categoryIds,productId);
            if(productToProductCategoryKeyRES){
                return new GeneralMessageDTO("create product success", Constants.CREATE_A_PRODUCT);
            }
            else{
                return new GeneralMessageDTO("create product failed", Constants.CREATE_A_PRODUCT,false);
            }
        }
        catch (Exception e){
            return new GeneralMessageDTO(e.toString(),"create-a-product");
        }
    }
    @GetMapping("create-a-product")
    public GeneralMessageDTO getCreateAProduct(){
        try{
            System.out.println("getCreateAProduct success");
            return new GeneralMessageDTO("create product success",Constants.CREATE_A_PRODUCT);
        }
        catch (Exception e){
            return new GeneralMessageDTO(e.toString(),"create-a-product");
        }
    }

}
