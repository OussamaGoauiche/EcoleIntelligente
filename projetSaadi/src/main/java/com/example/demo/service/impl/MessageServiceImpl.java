package com.example.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.dao.MessageDao;
import com.example.demo.models.MessageEntity;
import com.example.demo.service.facade.MessageService;

public class MessageServiceImpl implements MessageService{
	private MessageDao messageDao;
	
	public MessageServiceImpl(MessageDao messagetDao) {
        this.messageDao = messageDao;
    }

	@Override
	public MessageEntity save(MessageEntity messageEntity) {
		MessageEntity saved=messageDao.save(messageEntity);
		return saved;
	}

	@Override
	public List<MessageEntity> findAll() {
		return messageDao.findAll();
	}

	@Override
	public void delete(Integer id) {
		messageDao.deleteById(id);
	}
	
	
}
