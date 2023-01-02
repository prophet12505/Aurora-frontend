package aurora.controller;

import aurora.DTO.GeneralMessageDTO;
import aurora.DTO.LoginResDTO;
import aurora.entity.User;
import aurora.service.UserService;
import aurora.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class LoginSignupController {

    @Autowired
    private UserService userService;

//    users related
    @GetMapping("/users")
    public List<User> getAllUsers() {
        //return "fine";
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public void createUser(@RequestBody User user) {
        userService.createUser(user);
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/users/{id}")
    public void updateUser(@PathVariable long id, @RequestBody User user) {
        user.setId(id);
        userService.updateUser(user);
    }

    @PostMapping("/users/{id}/delete")
    public void deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
    }

    @PostMapping("/login")
    public LoginResDTO login(@RequestBody User user){

        try{
            if(!userService.emailExist(user.getEmail())){
//                System.out.println("email doesn't exist!");
                 LoginResDTO loginResDTO =new LoginResDTO(false,"email doesn't exist");
                return loginResDTO;
            }
            User queryResUser=userService.getUserByEmailAndPassword(user.getEmail(),user.getPassword());
            System.out.println(queryResUser);
            if(queryResUser==null)
            {
                return new LoginResDTO(false,"email and password doesn't match");
            }
            else if(!queryResUser.getEmailIsVerified()){
                return new LoginResDTO(false,"email is not verified");
            }
            else{
                return new LoginResDTO(true,"",user.getName(),user.getEmail());
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return new LoginResDTO(false,e.getMessage());
        }
    }
    @PostMapping("/signup")
    public GeneralMessageDTO signup(@RequestBody User user){
        if(userService.emailExist(user.getEmail())){
            System.out.println("email already exists");
            return new GeneralMessageDTO("email already exists", Constants.SIGNUP,false);
        }
        else{
            System.out.println(user);
            userService.createUser(user);
            return new GeneralMessageDTO("signup successfully, an email has been sent to your inbox",Constants.SIGNUP);
        }

    }

}