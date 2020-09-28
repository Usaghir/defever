package se.kth.sda.defever.Chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatRestController {

    @Autowired
    private ChatService chatService;


    @GetMapping("")
    public List<ChatMessage> getAll() {
        return chatService.getAll();
    }

    @GetMapping("/{id}")
    public ChatMessage getById(@PathVariable Long id) {
        return chatService
                .getByID(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public ChatMessage create(@RequestBody ChatMessage newChatMessage) {
        return chatService.create(newChatMessage);
    }

    @PutMapping("")
    public ChatMessage update(@RequestBody ChatMessage updatedChatMessage) {
        return chatService.update(updatedChatMessage);
    }

    @DeleteMapping("/{id}")
    public void Delete(@PathVariable Long id) {
        chatService.delete(id);
    }


}






