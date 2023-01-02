package aurora.DTO;

import aurora.entity.User;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;


    private String name;


    private String email;


    private String password;

    public UserDTO(User user){
        this.password=user.getPassword();
        this.id=user.getId();
        this.email=user.getEmail();
        this.name=user.getName();
    }
}
