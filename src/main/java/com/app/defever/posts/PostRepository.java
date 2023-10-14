package com.app.defever.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
   extend the appropriate JpaRepository to get common database operations for Post
   Add also the correct annotation to describe the Repository.
*/
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
