package se.kth.sda.defever.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {
  @Autowired private CommentService commentService;

  @GetMapping("")
  public List<Comment> getAllByPostId(@RequestParam("postId") Long postId) {
    return commentService.getAllByPostId(postId);
  }

  @PostMapping("")
  public Comment postComment(@RequestBody Comment comment) {
    return commentService.create(comment);
  }
  
  @PutMapping("")
  public Comment update(@RequestBody Comment updatedComment) {
	  return commentService.update(updatedComment);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    commentService.deleteById(id);
  }
}
