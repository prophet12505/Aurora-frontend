package aurora.dao;

import aurora.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
