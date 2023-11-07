package com.app.defever.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/*
   AutoWire PostService and create the methods needed to implement the API.
*/
@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "https://defever.netlify.app")
public class PostController {
  @Autowired private PostService postService;

  @GetMapping("")
  public List<Post> getAll() {
    return postService.getAll();
  }

  @GetMapping("/{id}")
  public Post getById(@PathVariable Long id) {
    return postService
        .getByID(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
  }

  @PostMapping("")
  public Post create(@RequestBody Post newPost) {
    return postService.create(newPost);
  }

  @PutMapping("")
  public Post update(@RequestBody Post updatedPost) {
    return postService.update(updatedPost);
  }

  @DeleteMapping("/{id}")
  public void Delete(@PathVariable Long id) {
    postService.delete(id);
  }
}
