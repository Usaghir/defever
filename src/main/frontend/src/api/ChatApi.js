import Api from "./Api";

class ChatApi {
  getAllChats() {
    return Api.get("/chat");
  }

  getChatById(id) {
    return Api.get("/chat/" + id);
  }

  createPChat(chat) {
    return Api.post("/chat", chat);
  }

  updateChat(chat) {
    return Api.put("/chat", chat);
  }

  deleteChat(id) {
    return Api.delete("/chat/" + id);
  }
}

const chatApiInstance = new ChatApi();
export default chatApiInstance;
