import React, { Component } from "react";

import CommentsApi from "./../../api/CommentsApi";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import UserApi from "../../api/UserApi";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      comments: [],
    };
  }

  async createComment(commentData) {
    if(commentData !== undefined) {
      try {
        const post = this.props.post;
        const user = this.state.user;
        const response = await CommentsApi.createComment({
          body: commentData.body, date: new Date().toLocaleString(),
          likes: commentData.likes, post, user,
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
      const post = this.props.post;
      await CommentsApi.updateComment({
        id: newCommentData.id, body: newCommentData.body, date: newCommentData.date,
        likes: newCommentData.likes, post, user: newCommentData.user
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
    UserApi.current()
      .then(({ data }) => this.setState({ user: data }))
      .catch((err) => console.error(err));
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
            currentUser={this.state.user}
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
