import Api from './Api';

class ChatApi {
  getAllChat() {
    return Api.get('/chat');
  }

  getChatById(id) {
    return Api.get('/chat/' + id);
  }

  createPChat(chat) {
    return Api.post('/chat', chat);
  }

  updateChat(chat) {
    return Api.put('/chat', chat);
  }

  deleteChat(id) {
    return Api.delete('/chat/' + id);
  }
}

export default new ChatApi();
