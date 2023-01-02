package aurora.controller;

import aurora.DTO.GeneralMessageDTO;
import aurora.dao.UserRepository;
import aurora.entity.User;
import aurora.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class UserController {

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




}