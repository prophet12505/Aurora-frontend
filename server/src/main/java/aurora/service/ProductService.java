package aurora.service;

import aurora.DTO.CreateProductDTO;
import aurora.dao.ProductRepository;
import aurora.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Query;
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
            System.out.println(e.getStackTrace());
        }
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

}
