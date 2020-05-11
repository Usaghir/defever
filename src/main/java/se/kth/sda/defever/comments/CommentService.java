package se.kth.sda.defever.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
  @Autowired public CommentRepository commentRepository;

  public List<Comment> getAllByPostId(Long postId) {
    return commentRepository.findAllByPostId(postId);
  }

  public Optional<Comment> getById(Long id) {
    return commentRepository.findById(id);
  }

  public Comment create(Comment comment) {
    return commentRepository.save(comment);
  }
  
  public Comment update(Comment updatedComment) {
	  return commentRepository.save(updatedComment);
  }

  public void deleteById(Long id) {
    commentRepository.deleteById(id);
  }
}
