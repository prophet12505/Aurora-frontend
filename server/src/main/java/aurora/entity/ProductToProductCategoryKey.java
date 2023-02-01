package aurora.entity;

import lombok.Data;

import jakarta.persistence.*;

@Entity
@Table(name="product_to_product_category_key")
@Data
public class ProductToProductCategoryKey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id", columnDefinition = "bigint")
    private Long productId;

    @Column(name = "product_category_id", columnDefinition = "bigint")
    private  Long productCategoryId;
}
