package aurora.service;



import aurora.DTO.CreateProductDTO;
import aurora.dao.UserRepository;
import aurora.entity.User;


import jakarta.persistence.*;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.List;


@Transactional
@Service
@Repository
public class UserService {
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    //private EntityManagerFactory entityManagerFactory;
    //private EntityManager entityManager ;

    public UserService(){
        //this.entityManagerFactory = entityManagerFactoryBean.getObject();
        //this.entityManager = entityManagerFactory.createEntityManager();
    }

    public void createUser(User user) {
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
//            entityManager.persist(user);
            userRepository.save(user);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public List<User> createUserTest() {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        String sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter(1, "John");
        query.setParameter(2, "123@qq.com");
        query.setParameter(3, "00111100");
        query.executeUpdate();
        entityManager.getTransaction().commit();

        return userRepository.findAll();
    }
    public Boolean emailExist(String email){
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        //int res=-1;
        try{
            entityManager.getTransaction().begin();
            String sql = "SELECT COUNT(*) FROM user WHERE email = (?)";
            Query query = entityManager.createNativeQuery(sql);
            query.setParameter(1, email);

            int count = ((Number)query.getSingleResult()).intValue();
            entityManager.getTransaction().commit();
            return count >= 1;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
//        finally {
//            entityManager.close();
//            entityManagerFactory.close();
//        }
    }
    public User getUserByEmailAndPassword(String email,String password){
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        try{
            entityManager.getTransaction().begin();
            String jpql = "SELECT u FROM User u WHERE u.email = :email AND u.password= :password";
            Query query = entityManager.createQuery(jpql);
            query.setParameter("email", email);
            query.setParameter("password", password);
            User res = (User)query.getSingleResult();
            logger.info("user.name:"+res.getName());
            entityManager.getTransaction().commit();
            return res;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public Boolean verifyUserEmail(String token) {
        try{
            EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
            EntityManager entityManager = entityManagerFactory.createEntityManager();
            entityManager.getTransaction().begin();
            logger.info("token:"+token);


            byte[] decodedBytes = Base64.getDecoder().decode(token);
            String email = new String(decodedBytes);
            logger.info("email:"+email);
    //        String jpql="SELECT u From User u WHERE u.email=:email";
            String jpql="UPDATE User u SET u.emailIsVerified=true WHERE u.email=:email";
            Query query=entityManager.createQuery(jpql);
            query.setParameter("email",email);
            query.executeUpdate();
            entityManager.getTransaction().commit();
            logger.info("SUCCESSFULLY VERIFIED EMAIL!");
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }


    }
    public User getUserByEmailToken(String token){
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();

        byte[] decodedBytes = Base64.getDecoder().decode(token);
        String email = new String(decodedBytes);
        String jpql="SELECT  u FROM User u WHERE u.email=:email";
        Query query=entityManager.createQuery(jpql);
        query.setParameter("email",email);
        User res=(User)query.getSingleResult();
        entityManager.getTransaction().commit();
        logger.info("SUCCESSFULLY getUserByEmailToken!");
        return res;

    }
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    public User getUserById(long id) {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        return entityManager.find(User.class, id);
    }

    public void updateUser(User user) {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.merge(user);
    }

    public void deleteUser(long id) {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        User user = entityManager.find(User.class, id);
        if (user != null) {
            entityManager.remove(user);
        }
    }


}

