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

    @Column(name = "date_created")
    private Date dateCreated;

    @Column(name = "user_id")
    private Long userId;

}
