package aurora.controller;

import aurora.DTO.CreateProductDTO;
import aurora.DTO.GeneralMessageDTO;
import aurora.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
            productService.createAProduct(createProductDTO);
            return new GeneralMessageDTO("create product success","create-a-product");
        }
        catch (Exception e){
            return new GeneralMessageDTO(e.toString(),"create-a-product");
        }

    }
    @GetMapping("create-a-product")
    public GeneralMessageDTO getCreateAProduct(){
        try{
            System.out.println("getCreateAProduct success");
            return new GeneralMessageDTO("create product success","create-a-product");
        }
        catch (Exception e){
            return new GeneralMessageDTO(e.toString(),"create-a-product");
        }

    }

}
