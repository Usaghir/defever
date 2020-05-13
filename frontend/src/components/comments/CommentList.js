import React, { Component } from "react";

import CommentsApi from "./../../api/CommentsApi";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  async createComment(commentData) {
    if(commentData !== undefined) {
      try {
        const post = { id: this.props.post.id, body: this.props.post.body,
        likes: this.props.post.likes };
        const response = await CommentsApi.createComment({
          body: commentData.body, likes: commentData.likes,
          post,
        });
        const comment = response.data;
        const newComments = this.state.comments.concat(comment);
  
        this.setState({
          comments: newComments,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  async updateComment(newCommentData) {
    try {
      const post = { id: this.props.post.id, body: this.props.post.body,
      likes: this.props.post.likes };
      await CommentsApi.updateComment({
        id: newCommentData.id, body: newCommentData.body,
        likes: newCommentData.likes, post,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async deleteComment(comment) {
    try {
      await CommentsApi.deleteComment(comment.id);
      const newComments = this.state.comments.filter(
        (c) => c.id !== comment.id
      );
      this.setState({
        comments: newComments,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    const postId = this.props.post.id;
    CommentsApi.getAllCommentsByPostId(postId)
      .then(({ data }) => {
        this.setState({ comments: data });
      })
      .catch((err) => console.error(err.response.data));
  }

  render() {
    const comments = this.state.comments.sort((comment1, comment2) =>
                      (comment1.likes <= comment2.likes) ? 1 : -1);
    return (
      <div>
        <CommentForm
          onSubmit={(commentData) => this.createComment(commentData)}
        />
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onLikeClick={(newCommentData) => this.updateComment(newCommentData)}
            onDeleteClick={() => this.deleteComment(comment)}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
