import React , {useState} from "react";
import CommentList from "../comments/CommentList";

function PostCard({ currentUser, post, onDeleteClick, onLikeClick }) {
  const [likes, setLikes] = useState(post.likes.length);

  const incrementLikes = () => {
    if(post.likes.some(like => like.id === currentUser.id)) {
      for(let i = 0; i < post.likes.length; i++) {
        if(post.likes[i].id === currentUser.id) {
          post.likes.splice(i, 1);
        }
      }
      setLikes(likes - 1);
    } else {
      post.likes.push(currentUser);
      setLikes(likes + 1);
    }
    onLikeClick({ id: post.id, body: post.body, date: post.date,
    likes: post.likes, user: post.user});
  };
  
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p className="post-comment-info">Post by <strong>{post.user.name}</strong> at <em>{post.date}</em></p>
        <p>{post.body}</p>
        <p className="post-comment-info">{(likes === 0) ? 'No' : likes} likes</p>
        <button className="btn btn-primary btn-sm" onClick={incrementLikes} id="post-like">
          { post.likes.some(like => like.id === currentUser.id) ? 'Unlike' : 'Like'} </button>
        { (currentUser.id === post.user.id) ? 
        <button className="btn btn-danger btn-sm mb-2" onClick={onDeleteClick}>
          Delete
        </button>
        : null}
        
        <div className="comment-body">
          <CommentList post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
