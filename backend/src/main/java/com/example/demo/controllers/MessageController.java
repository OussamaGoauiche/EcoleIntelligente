package com.example.demo.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.MessageEntity;
import com.example.demo.service.facade.MessageService;

@RestController
@RequestMapping("clients")
public class MessageController {
	private MessageService messageService;
	public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }
	 @GetMapping("")
	    public ResponseEntity<List<MessageEntity>> getClients() {
	        return new ResponseEntity<>(messageService.findAll(), HttpStatus.OK);
	    }
	 @DeleteMapping("/id/{id}")
	    public ResponseEntity<?> delete(@PathVariable() Integer id) {
	        messageService.delete(id);
	        return ResponseEntity.noContent().build();
	    }
	 @PostMapping("")
	    public ResponseEntity<MessageEntity> save(@PathVariable @RequestBody() MessageEntity clientRequestDto) {
	        MessageEntity clientResponseDto = messageService.save(clientRequestDto);
	        return new ResponseEntity<>(clientResponseDto, HttpStatus.CREATED);
	    }
}
