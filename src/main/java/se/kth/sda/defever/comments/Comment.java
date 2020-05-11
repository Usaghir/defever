package se.kth.sda.defever.comments;

import se.kth.sda.defever.posts.Post;

import javax.persistence.*;

@Entity
@Table(name = "comment")
public class Comment {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "body")
  private String body;
  
  @Column(name = "likes")
  private Long likes;

  @ManyToOne
  private Post post;

  // Hibernate requires empty constructor
  public Comment() {}

  public Comment(Long id, String body, Long likes, Post post) {
    this.id = id;
    this.body = body;
    this.likes = likes;
    this.post = post;
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

  public Post getPost() {
    return post;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  public Long getLikes() {
	return likes;
  }

  public void setLikes(Long likes) {
	this.likes = likes;
  }
}
