package com.app.defever.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/*
   Autowire the PostRepository and use it to implement all the service methods.
*/
@Service
public class PostService {
  @Autowired private PostRepository repository;

  public List<Post> getAll() {
    // get all posts and return them as List<Post>
    return repository.findAll();
  }

  public Optional<Post> getByID(Long id) {
    // get a post by ID if it exists
    return repository.findById(id);
  }

  public Post create(Post newPost) {
    // save the post to DB and return the saved post
    return repository.save(newPost);
  }

  public Post update(Post updatedPost) {
    // update the post if it exists in DB and return the updated post.
    return repository.save(updatedPost);
  }

  public void delete(Long id) {
    // delete the post by id
    repository.deleteById(id);
  }
}
