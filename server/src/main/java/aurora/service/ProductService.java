package aurora.service;

import aurora.DTO.CreateProductDTO;
import aurora.dao.ProductCategoryRepository;
import aurora.dao.ProductRepository;
import aurora.dao.ProductToProductCategoryKeyRepository;
import aurora.entity.Product;
import aurora.entity.ProductCategory;
import aurora.entity.ProductToProductCategoryKey;
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

import java.util.ArrayList;
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

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private ProductToProductCategoryKeyRepository productToProductCategoryKeyRepository;

    //return product id
    public Long createAProduct(CreateProductDTO createProductDTO) {
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            //entityManager.getTransaction().begin();
            Product product =new Product();
            product.setName(createProductDTO.getName());
            product.setBrand(createProductDTO.getBrand());
            product.setDescription(createProductDTO.getDescription());
            product.setPrice(Double.parseDouble(createProductDTO.getPrice()));
            product.setActive(createProductDTO.getActive());
            product.setImage(createProductDTO.getImage());
            product.setUnitsInStock(Integer.valueOf(createProductDTO.getUnitsInStock()));
            Product productSaveRes=productRepository.save(product);
            logger.info("productSaveRes:");
            logger.info(productSaveRes.getName()+productSaveRes.getDescription());
            return productSaveRes.getId();
        }
        catch (Exception e){
            logger.error(e.toString());
            return -1L;
        }
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public Product getProductById(Long id){
        return productRepository.findById(id).get();
    }

    public List<Long> createProductCategory(List<String> categoryNames) {
        List<Long> res=new ArrayList<>();
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
//            if category not exists insert it

            for (String categoryName : categoryNames) {
                logger.info("categoryName:"+categoryName);
                Query queryNameExist = entityManager.createQuery(
                        "SELECT pc FROM ProductCategory pc WHERE categoryName = :categoryName");
                queryNameExist.setParameter("categoryName", categoryName);
                List<ProductCategory> queryNameExistRes=queryNameExist.getResultList();
                if(queryNameExistRes.size()>=1){
                    logger.info("FOUND: product category");
                    res.add(queryNameExistRes.get(0).getId());
                }
                //create that product
                else{
                    logger.info("CREATE: product category");
                    ProductCategory productCategory=new ProductCategory();
                    productCategory.setCategoryName(categoryName);
                    ProductCategory productCategoryRes=productCategoryRepository.save(productCategory);
                    res.add(productCategoryRes.getId());
                }
            }
            entityManager.getTransaction().commit();
            logger.info("res:"+res);
            return res;
        }catch (Exception e){
            logger.error(e.getMessage());
            return res;
        }
    }
    public Boolean createProductCategoryKey(List<Long> categoryIds,Long productId ){
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            for(Long categoryId:categoryIds){
                Query productCategoryKeyExist=entityManager.createQuery("SELECT pck FROM ProductToProductCategoryKey pck WHERE pck.productId=:productId AND pck.productCategoryId=:categoryId");
                productCategoryKeyExist.setParameter("productId",productId);
                productCategoryKeyExist.setParameter("categoryId",categoryId);
                List<ProductToProductCategoryKey> productCategoryExistRES=productCategoryKeyExist.getResultList();
                if(productCategoryExistRES.size()==0){//non exist
                    ProductToProductCategoryKey productToProductCategoryKey=new ProductToProductCategoryKey();
                    productToProductCategoryKey.setProductId(productId);
                    productToProductCategoryKey.setProductCategoryId(categoryId);
                    productToProductCategoryKeyRepository.save(productToProductCategoryKey);
                }

            }
            entityManager.getTransaction().commit();
            return true;
        }
        catch (Exception e){
            logger.error(e.getMessage());
            return false;
        }
    }
    public List<Product> getProductsByCategoryId(long categoryId){
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            Query query=entityManager.createQuery("SELECT p FROM Product p WHERE id IN (SELECT ptpck.productId FROM ProductToProductCategoryKey ptpck WHERE ptpck.productCategoryId=:categoryId)");
            query.setParameter("categoryId",categoryId);
            entityManager.getTransaction().commit();
            return query.getResultList();
        }catch (Exception e){
            logger.error(e.getMessage());
            return null;
        }
    }
}
