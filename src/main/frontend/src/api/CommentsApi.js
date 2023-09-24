import Api from "./Api";

class CommentsApi {
  getAllCommentsByPostId(id) {
    const params = { postId: id };
    return Api.get("/comments", { params });
  }

  createComment(comment) {
    return Api.post("/comments", comment);
  }

  updateComment(comment) {
    return Api.put("/comments", comment);
  }

  deleteComment(id) {
    return Api.delete("/comments/" + id);
  }
}

const commentApiInstance = new CommentsApi();
export default commentApiInstance;
