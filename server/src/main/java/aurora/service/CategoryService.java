package aurora.service;

import aurora.dao.ProductCategoryRepository;
import aurora.dao.ProductRepository;
import aurora.entity.ProductCategory;
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
public class CategoryService {
    private static final Logger logger= LoggerFactory.getLogger(CategoryService.class);
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    public List<ProductCategory> getAllProductCategories(){
        return productCategoryRepository.findAll();
    }
}
