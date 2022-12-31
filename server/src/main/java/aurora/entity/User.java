package aurora.entity;

import lombok.Data;

import jakarta.persistence.*;

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

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    public User(String name, String email,String password) {
        this.name=name;
        this.email=email;
        this.password=password;
    }

    public User() {

    }
}
