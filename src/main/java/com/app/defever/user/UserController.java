package com.app.defever.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "https://defever.onrender.com")
public class
UserController {
  @Autowired private UserService userService;
  @GetMapping("")
  public User current(Authentication authentication) {
    if (authentication != null) {
      return userService.findUserByEmail(authentication.getName());
    } else {
      // Handle the case where the user is not authenticated
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authenticated");
    }
  }

  @GetMapping("/{id}")
  public User getById(@PathVariable Long id) {
    return userService
        .getById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
  }

  @PutMapping("")
  public User update(@RequestBody User updatedUser) {
    return userService.update(updatedUser);
  }
}
