package aurora.service;

import aurora.DTO.CreateProductDTO;
import aurora.dao.ProductRepository;
import aurora.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@Repository
public class ProductService {
    private static final Logger logger= LoggerFactory.getLogger(ProductService.class);
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

    @Autowired
    private ProductRepository productRepository;

    public void createAProduct(CreateProductDTO createProductDTO) {
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            String sql = "INSERT INTO product (name, description, image,active,brand,price,units_in_stock) VALUES (?, ?, ?,?,?,?,?)";
            Query query = entityManager.createNativeQuery(sql);
            query.setParameter(1, createProductDTO.getName());
            query.setParameter(2, createProductDTO.getDescription());
            query.setParameter(3, createProductDTO.getImage());
            query.setParameter(4, createProductDTO.getActive());
            query.setParameter(5, createProductDTO.getBrand());
            query.setParameter(6, createProductDTO.getPrice());
            query.setParameter(7,createProductDTO.getUnitsInStock());
            query.executeUpdate();

            entityManager.getTransaction().commit();
        }
        catch (Exception e){
            logger.info(e.toString());
        }
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public Product getProductById(Long id){
        return productRepository.findById(id).get();
    }
    public Boolean createProductCategoryKey() {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        try{
            Query query = entityManager.createQuery(
                    "INSERT INTO ProductCategory c (c.categoryName) SELECT :categoryName WHERE NOT EXISTS (SELECT 1 FROM ProductCategory WHERE categoryName = :categoryName)");
            query.setParameter("categoryName", categoryName);
            query.executeUpdate();
            return true;
        }catch (Exception e){
            logger.error(e.getMessage());
            return false;
        }

        entityManager.getTransaction().commit();
    }
}
