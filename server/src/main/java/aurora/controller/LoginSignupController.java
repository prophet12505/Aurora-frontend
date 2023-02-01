package aurora.controller;

import aurora.DTO.GeneralMessageDTO;
import aurora.DTO.LoginResDTO;
import aurora.entity.User;
import aurora.service.ProductService;
import aurora.service.UserService;
import aurora.util.Constants;
import aurora.util.MailSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;


import java.util.Base64;
import java.util.List;

@RestController
public class LoginSignupController {

    private static final Logger logger= LoggerFactory.getLogger(LoginSignupController.class);
    @Autowired
    private UserService userService;

//    users related
//    @GetMapping("/users")
//    public List<User> getAllUsers() {
//        //return "fine";
//        System.out.println("getAllUsers");
//        return userService.getAllUsers();
//    }

    @PostMapping("/users")
    public void createUser(@RequestBody User user) {

        userService.createUser(user);
    }

    @GetMapping("/users/")
    public User getUserById(@RequestParam(name="id",defaultValue = "2") long id) {
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
                 LoginResDTO loginResDTO =new LoginResDTO(false,"Login failed : Email doesn't exist");
                return loginResDTO;
            }
            User queryResUser=userService.getUserByEmailAndPassword(user.getEmail(),user.getPassword());
            System.out.println(queryResUser);
            if(queryResUser==null)
            {
                return new LoginResDTO(false,"Login failed : Email and password doesn't match");
            }
            else if(!queryResUser.getEmailIsVerified()){
                return new LoginResDTO(false,"Login failed : Email is not verified");
            }
            else{
                return new LoginResDTO(true,"",queryResUser.getName(),queryResUser.getEmail(),queryResUser);
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return new LoginResDTO(false,e.getMessage());
        }
    }
    @Value("${app.domain}")
    private String appDomain;

    @PostMapping("/signup")
    public GeneralMessageDTO signup(@RequestBody User user){
        if(userService.emailExist(user.getEmail())){
            System.out.println("email already exists");
            return new GeneralMessageDTO("Sign up failed: Email already exists", Constants.SIGNUP,false);
        }
        else{
            System.out.println(user);

            //encode user email to base 64
            String token= Base64.getEncoder().encodeToString(user.getEmail().getBytes());
            MailSender mailSender=new MailSender();
            mailSender.sendVerificationEmail(user.getEmail(),appDomain+"/verify-email?token="+token);

            userService.createUser(user);
            return new GeneralMessageDTO("Signup successfully, an email has been sent to your inbox!",Constants.SIGNUP);
        }

    }
    @GetMapping("/verify-email")
    public GeneralMessageDTO verifyEmail(@RequestParam(name="token") String token){

        try {
            if(userService.verifyUserEmail(token))
            {
                return  new GeneralMessageDTO("Congratulations! your email has been verified",Constants.VERIFY_EMAIL);
            }
            else{
                return new GeneralMessageDTO("verify email failed, please assure your link is correct",Constants.VERIFY_EMAIL,false);
            }
        }
        catch (Exception e)
        {
            return new GeneralMessageDTO("verify email failed:"+e.toString(),Constants.VERIFY_EMAIL,false);
        }
    }
    @GetMapping("/keep-login-state")
    public LoginResDTO keepLoginStateByServerCall(@RequestParam(name = "token") String token){
        try{

            User res= userService.getUserByEmailToken(token);
            return new LoginResDTO(true,"",res.getName(),res.getEmail(),res);
        }
        catch (Exception e){
            return new LoginResDTO(false,e.getMessage());
        }

    }

}