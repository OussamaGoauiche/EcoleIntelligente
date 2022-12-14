package com.example.demo.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="admin")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminEntity {
	private static final long serialVersionUID = 1L;

	@Id()
	@GeneratedValue
	private Integer id;
	@Column(nullable = false)
	private String cin;
	@Column(nullable = false)
	private String nom;
	@Column(nullable = false)
	private String prenom;

	@Column(name = "admin_telephone")
	private String telephone;
	
	@OneToMany(mappedBy = "admin", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<MessageEntity> messages;
}
