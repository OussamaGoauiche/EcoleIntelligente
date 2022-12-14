package com.example.demo.service.facade;

import java.util.List;

import com.example.demo.models.MessageEntity;

public interface MessageService {
	
	MessageEntity save(MessageEntity messageEntity);
	
	List<MessageEntity> findAll();
	
	void delete(Integer id);
	
}
