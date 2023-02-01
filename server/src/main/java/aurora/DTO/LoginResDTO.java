package aurora.DTO;

import aurora.entity.User;
import lombok.Data;

@Data
public class LoginResDTO {
    public LoginResDTO(Boolean loggedIn, String loginErrorMsg) {
        this.loggedIn = loggedIn;
        this.loginErrorMsg = loginErrorMsg;
        this.name = "";
        this.email = "";
    }
    public LoginResDTO(Boolean loggedIn, String loginErrorMsg, String name, String email) {
        this.loggedIn = loggedIn;
        this.loginErrorMsg = loginErrorMsg;
        this.name = name;
        this.email = email;
    }
    public LoginResDTO(Boolean loggedIn, String loginErrorMsg, String name, String email,User user) {
        this.loggedIn = loggedIn;
        this.loginErrorMsg = loginErrorMsg;
        this.name = name;
        this.email = email;
        this.user = user;
        this.user.setPassword(null); // clear password -- prevent leaking
    }
    public LoginResDTO(Boolean loggedIn, String loginErrorMsg, User user) {
        this.loggedIn = loggedIn;
        this.loginErrorMsg = loginErrorMsg;
        this.user = user;
        this.user.setPassword(null);//clear password -- prevent leaking

    }

        private Boolean loggedIn;
        private String loginErrorMsg;
        private String name;
        private String email;
        private User user;




}
