package aurora.entity;


import lombok.Data;

//import javax.persistence.*;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name="cart_item")
@Data
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "date_created",updatable = false,columnDefinition = "timestamp default current_timestamp")
    private Date dateCreated=new Date();

    @Column(name = "date_modified",columnDefinition = "timestamp default current_timestamp")
    private Date dateModified=new Date();

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "quantity")
    private int quantity;

}
