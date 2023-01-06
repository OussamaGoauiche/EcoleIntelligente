package com.example.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.MessageEntity;

public interface MessageDao extends JpaRepository<MessageEntity,Integer> {

}