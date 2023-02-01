package aurora.dao;

import aurora.entity.Product;
import aurora.entity.ProductToProductCategoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductToProductCategoryKeyRepository extends JpaRepository<ProductToProductCategoryKey, Long> {

}
