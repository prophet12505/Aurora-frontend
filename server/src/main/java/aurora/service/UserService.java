package aurora.service;



import aurora.DTO.CreateProductDTO;
import aurora.dao.UserRepository;
import aurora.entity.User;


import jakarta.persistence.*;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional
@Service
@Repository
public class UserService {
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;

    @Autowired
    private UserRepository userRepository;

    //private EntityManagerFactory entityManagerFactory;
    //private EntityManager entityManager ;

    public UserService(){
        //this.entityManagerFactory = entityManagerFactoryBean.getObject();
        //this.entityManager = entityManagerFactory.createEntityManager();
    }

    public void createUser(User user) {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.persist(user);
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

