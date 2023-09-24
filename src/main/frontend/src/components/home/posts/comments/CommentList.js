import React, { useState, useEffect } from "react";
import CommentsApi from "../../../../api/CommentsApi";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import UserApi from "../../../../api/UserApi";

function CommentList({ post }) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const postId = post.id;
        const userResponse = await UserApi.current();
        setUser(userResponse.data);

        const commentsResponse = await CommentsApi.getAllCommentsByPostId(postId);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [post]);

  const createComment = async (commentData) => {
    if (commentData !== undefined) {
      try {
        const response = await CommentsApi.createComment({
          body: commentData.body,
          date: new Date().toLocaleString(),
          likes: [],
          post,
          user,
        });

        const comment = response.data;
        setComments([...comments, comment]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateComment = async (newCommentData) => {
    try {
      const currentPost = post;
      await CommentsApi.updateComment({
        id: newCommentData.id,
        body: newCommentData.body,
        date: newCommentData.date,
        likes: newCommentData.likes,
        post: currentPost,
        user: newCommentData.user,
      });

      const updatedComments = comments.map((comment) =>
        comment.id === newCommentData.id ? newCommentData : comment
      );
      setComments(updatedComments);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (comment) => {
    try {
      await CommentsApi.deleteComment(comment.id);
      const newComments = comments.filter((c) => c.id !== comment.id);
      setComments(newComments);
    } catch (error) {
      console.error(error);
    }
  };

  const sortedComments = comments.slice().sort((comment1, comment2) =>
    comment1.likes <= comment2.likes ? 1 : -1
  );

  return (
    <div className="mb-4">
      <CommentForm onSubmit={createComment} />
      {sortedComments.map((comment) => (
        <CommentCard
          key={comment.id}
          currentUser={user}
          comment={comment}
          onLikeClick={updateComment}
          onDeleteClick={() => deleteComment(comment)}
        />
      ))}
    </div>
  );
}

export default CommentList;
