package aurora.DTO;

import lombok.Data;

import java.util.List;

@Data
public class CreateProductDTO {

    public CreateProductDTO(String name, String description, String image, Boolean active, String brand, String price, String unitsInStock, List<String> category) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.active = active;
        this.brand = brand;
        this.price = price;
        this.unitsInStock = unitsInStock;
        this.category = category;
    }
    public CreateProductDTO(){

    }
    private String name;



    private  String description;


    private String image;


    private Boolean active;


    private String brand;


    private String price;


    private String unitsInStock;

    private List<String> category;

}
