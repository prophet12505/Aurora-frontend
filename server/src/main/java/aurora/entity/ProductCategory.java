package aurora.entity;

import lombok.Data;

import jakarta.persistence.*;


@Entity
@Table(name="product_category")
@Data
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;



}
