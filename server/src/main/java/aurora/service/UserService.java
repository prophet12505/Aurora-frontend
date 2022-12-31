package aurora.service;



import aurora.entity.User;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import javax.persistence.TypedQuery;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@Repository
public class UserService {
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManagerFactoryBean;
//    @PersistenceContext
//    private EntityManager entityManager;

    public List<User> getAllUsers() {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();

//        TypedQuery<User> query = entityManager.createQuery("SELECT u FROM aurora.entity.User u" , User.class);
        TypedQuery<User> query = entityManager.createQuery("SELECT u FROM aurora.entity.User u" , User.class);
        return query.getResultList();
    }
    public void createUser(User user) {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.persist(user);
    }
    public void createUserTest() {
        EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        User user =new User("hongxin","prophet12505@gmail.com","mike1999611");
        entityManager.persist(user);
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

