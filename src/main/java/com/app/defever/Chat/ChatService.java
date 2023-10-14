package com.app.defever.Chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

/*
   Autowire the ChatRepository and use it to implement all the service methods.
*/
@Service
public class ChatService {
    @Autowired
    private ChatRepository repository;

    public List<ChatMessage> getAll() {
        // get all ChatMessage and return them as List<ChatMessage>
        return repository.findAll();
    }

    public Optional<ChatMessage> getByID(Long id) {
        // get a ChatMessage by ID if it exists
        return repository.findById(id);
    }

    public ChatMessage create(ChatMessage newChatMessage) {
        // save the ChatMessage to DB and return the saved ChatMessage
        return repository.save(newChatMessage);
    }

    public ChatMessage update(ChatMessage updatedChatMessage) {
        // update the ChatMessage if it exists in DB and return the updated ChatMessage.
        return repository.save(updatedChatMessage);
    }

    public void delete(Long id) {
        // delete the ChatMessage by id
        repository.deleteById(id);
    }
}