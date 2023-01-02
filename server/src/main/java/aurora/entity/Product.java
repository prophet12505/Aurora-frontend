package aurora.entity;

import lombok.Data;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name="product")
@Data
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private  String description;

//    base64 string of image
    @Column(name = "image",columnDefinition="TEXT")
    private String image;

    @Column(name = "active")
    private boolean active;

    @Column(name = "brand")
    private String brand;

    @Column(name = "price")
    private Integer price;

    @Column(name = "units_in_stock", columnDefinition = "int default 99")
    private Integer unitsInStock;

    @Column(name = "date_created",updatable = false, columnDefinition = "timestamp default current_timestamp")
    private Date dateCreated;

    @Column(name = "date_modified",columnDefinition = "timestamp default current_timestamp")
    private Date dateModified;


    //review and comments needed to be added
}