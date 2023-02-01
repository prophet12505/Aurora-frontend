package aurora.service;

import aurora.DTO.CartItemDTO;
import aurora.dao.CartItemRepository;
import aurora.entity.CartItem;
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

import java.util.Date;
import java.util.List;

@Transactional
@Service
@Repository
public class CartItemService {
    private static final Logger logger= LoggerFactory.getLogger(CartItemService.class);
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

    @Autowired
    CartItemRepository cartItemRepository;

    public CartItem addToCart(long userId, long productId,int quantity){
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();

            Query queryIfCartItemExist=entityManager.createQuery("SELECT ci from CartItem ci where ci.userId=:userId and ci.productId=:productId");
            queryIfCartItemExist.setParameter("userId",userId);
            queryIfCartItemExist.setParameter("productId",productId);
            if(queryIfCartItemExist.getResultList().size()>0){
                CartItem cartItemToAdd= (CartItem)queryIfCartItemExist.getResultList().get(0);
                cartItemToAdd.setQuantity(cartItemToAdd.getQuantity()+quantity);
                cartItemToAdd.setDateModified(new Date());
                cartItemRepository.save(cartItemToAdd);
                entityManager.getTransaction().commit();
                return cartItemToAdd;
            }
            else{
                CartItem cartItemToAdd= new CartItem();
                cartItemToAdd.setProductId(productId);
                cartItemToAdd.setUserId(userId);
                cartItemToAdd.setQuantity(quantity);
                cartItemRepository.save(cartItemToAdd);


                entityManager.getTransaction().commit();
                return cartItemToAdd;
            }
        }catch (Exception e){

            logger.error(e.getMessage());
            return null;
        }

    }

    //needs a DTO to contain return results
    public List<CartItemDTO> getCartItemsByUserId(long userId){
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();

            Query getCartItemsByUserIdQuery=entityManager.createQuery("SELECT new aurora.DTO.CartItemDTO(ci, p) FROM CartItem ci \n" +
                    "JOIN Product p ON ci.productId = p.id \n" +
                    "WHERE ci.userId = :userId");
            //"SELECT p FROM Product p JOIN CartItem ci ON p.id = ci.productId WHERE ci.userId = :userId"

            getCartItemsByUserIdQuery.setParameter("userId",userId);
            entityManager.getTransaction().commit();
            return (List<CartItemDTO>)getCartItemsByUserIdQuery.getResultList();

        }
        catch (Exception e){
            logger.error(e.getMessage());
            return null;
        }
    }



}
