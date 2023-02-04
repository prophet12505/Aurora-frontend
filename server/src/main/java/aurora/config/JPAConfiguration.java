package aurora.config;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Properties;

//import javax.persistence.EntityManagerFactory;
//import javax.persistence.EntityManager;
//import javax.persistence.Persistence;

import javax.sql.DataSource;

import aurora.controller.LoginSignupController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;

import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

//@ImportResource({ "classpath:persistence.xml" })
@EnableTransactionManagement
@EnableJpaRepositories("aurora.dao")
@Configuration
public class JPAConfiguration {
    private static final Logger logger= LoggerFactory.getLogger(JPAConfiguration.class);
    @Bean
    public DataSource dataSource() throws URISyntaxException {
        try{
        //consider try catch
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        original datasource
//        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
//        dataSource.setUrl("jdbc:mysql://localhost:3306/aurora");
//        dataSource.setUsername("root");
//        dataSource.setPassword("mike1999611");
//        ===========================

        // heroku datasource
//        URI jdbUri = new URI(System.getenv("JAWSDB_MARIA_URL"));
//        String username = jdbUri.getUserInfo().split(":")[0];
//        String password = jdbUri.getUserInfo().split(":")[1];
//        String port = String.valueOf(jdbUri.getPort());
//        String jdbUrl = "jdbc:mysql://" + jdbUri.getHost() + ":" + port + jdbUri.getPath();
//        //dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
//        dataSource.setUrl(jdbUrl);
//        dataSource.setUsername(username);
//        dataSource.setPassword(password);
//        logger.error("jdbUrl :"+jdbUrl);
//        System.out.println("jdbUrl :"+jdbUrl);
        //=============================

        //aws connection
//        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://opp5vq1oxmmgyx12:l5ruuan1ytfrhvdk@hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/si4m2x66fcdue1dc");
        //dataSource.setUrl("jdbc:mysql://opp");
        dataSource.setUsername("opp5vq1oxmmgyx12");
        dataSource.setPassword("l5ruuan1ytfrhvdk");

//        ============================
        return dataSource;
        }
        catch (Exception e){
            logger.error(e.getMessage());
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Bean(name="entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean() throws URISyntaxException {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource());
        factoryBean.setPackagesToScan("aurora.entity");
        factoryBean.setJpaVendorAdapter(jpaVendorAdapter());
        factoryBean.setJpaProperties(jpaProperties());
        return factoryBean;
    }


    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setShowSql(true);
        vendorAdapter.setGenerateDdl(true);
        vendorAdapter.setDatabase(Database.MYSQL);
        return vendorAdapter;
    }

    private Properties jpaProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.show_sql", "true");
        properties.put("hibernate.use_sql_comments", "true");
        properties.put("hibernate.use_dynamic_insert", "true");
        return properties;
    }

    @Bean
    public PlatformTransactionManager transactionManager() throws URISyntaxException {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean().getObject());
        return transactionManager;
    }

//    @Bean
//    public EntityManagerFactory entityManagerFactory(LocalContainerEntityManagerFactoryBean factoryBean) {
//        return factoryBean.getObject();
//    }
//    @Bean
//    public EntityManager entityManager() {
//        return entityManagerFactory().createEntityManager();
//    }



}
