package com.app.defever.comments;

import jakarta.persistence.*;
import com.app.defever.posts.Post;
import com.app.defever.user.User;

import java.util.Set;


import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "comment")
public class Comment {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "body")
  private String body;
  
  @Column(name = "date")
  private String date;
  
  @ManyToMany
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JoinTable(name = "comment_likes",
		  	 joinColumns = {@JoinColumn(name = "comment_id")},
		  	 inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private Set<User> likes;

  @ManyToOne
  @OnDelete(action = OnDeleteAction.CASCADE)
  private Post post;
  
  @ManyToOne
  private User user;

  // Hibernate requires empty constructor
  public Comment() {}

  public Comment(Long id, String body, String date, Set<User> likes, Post post, User user) {
    this.id = id;
    this.body = body;
    this.date = date;
    this.likes = likes;
    this.post = post;
    this.user = user;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }

  public String getDate() {
	return date;
  }

  public void setDate(String date) {
	this.date = date;
  }

  public Post getPost() {
    return post;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  public Set<User> getLikes() {
	return likes;
  }

  public void setLikes(Set<User> likes) {
	this.likes = likes;
  }

  public User getUser() {
	return user;
  }

  public void setUser(User user) {
	this.user = user;
  } 
}
