package aurora.entity;

import lombok.Data;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email",unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name="create_date", updatable = false , columnDefinition = "timestamp default current_timestamp")
    private Date createDate=new Date();

    //new added
    @Column(name = "email_is_verified",columnDefinition = "Boolean default false")
    private Boolean emailIsVerified=false;
//    @Column(name="test_field",columnDefinition = "int default 100")
//    private int testField;

//    public User(String name, String email,String password) {
//        this.name=name;
//        this.email=email;
//        this.password=password;
//    }

    public User() {

    }
}
