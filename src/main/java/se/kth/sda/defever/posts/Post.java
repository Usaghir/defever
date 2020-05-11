package se.kth.sda.defever.posts;

import javax.persistence.*;

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
  
  @Column(name = "likes")
  private Long likes;

  //    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
  //    private List<Comment> comments = new ArrayList<>();

  public Post() {}

  public Post(String body, Long likes) {
    this.body = body;
    this.likes = likes;
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

  public Long getLikes() {
	return likes;
  }

  public void setLikes(Long likes) {
	this.likes = likes;
  }
}
