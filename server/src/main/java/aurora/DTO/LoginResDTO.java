package aurora.DTO;

import lombok.Data;

@Data
public class LoginResDTO {
    public LoginResDTO(Boolean loggedIn, String loginErrorMsg) {
        this.loggedIn = loggedIn;
        this.loginErrorMsg = loginErrorMsg;
        this.name = "";
        this.email = "";
    }

    private Boolean loggedIn;
        private String loginErrorMsg;
        private String name;
        private String email;


        public LoginResDTO(Boolean loggedIn, String loginErrorMsg, String name, String email) {
            this.loggedIn = loggedIn;
            this.loginErrorMsg = loginErrorMsg;
            this.name = name;
            this.email = email;
        }


}
