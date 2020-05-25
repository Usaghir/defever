package se.kth.sda.defever.posts;

import java.util.Set;

import javax.persistence.*;

import se.kth.sda.defever.user.User;

// add Hibernate annotations to define which table and columns should be used to save the Post
// Object.
@Entity
@Table(name = "post")
public class Post {
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "body")
  private String body;
  
  @Column(name = "date")
  private String date;
  
  @ManyToMany(cascade = {CascadeType.ALL})
  @JoinTable(name = "post_likes",
		  	 joinColumns = {@JoinColumn(name = "post_id")},
		  	 inverseJoinColumns = {@JoinColumn(name = "user_id")})
  private Set<User> likes;
  
  @ManyToOne
  private User user;

  //    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
  //    private List<Comment> comments = new ArrayList<>();

  public Post() {}

  public Post(String body, String date, Set<User> likes, User user) {
    this.body = body;
    this.date = date;
    this.likes = likes;
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
