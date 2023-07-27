package com.example.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ParcelDTO {
	
	public ParcelDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ParcelDTO(Long id, String sendername, String recievername, String senderaddress, String recieveraddress,
			Long recieverPhno, String username) {
		super();
		this.id = id;
		this.sendername = sendername;
		this.recievername = recievername;
		this.senderaddress = senderaddress;
		this.recieveraddress = recieveraddress;
		this.recieverPhno = recieverPhno;
		this.username = username;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSendername() {
		return sendername;
	}
	public void setSendername(String sendername) {
		this.sendername = sendername;
	}
	public String getRecievername() {
		return recievername;
	}
	public void setRecievername(String recievername) {
		this.recievername = recievername;
	}
	public String getSenderaddress() {
		return senderaddress;
	}
	public void setSenderaddress(String senderaddress) {
		this.senderaddress = senderaddress;
	}
	public String getRecieveraddress() {
		return recieveraddress;
	}
	public void setRecieveraddress(String recieveraddress) {
		this.recieveraddress = recieveraddress;
	}
	public Long getRecieverPhno() {
		return recieverPhno;
	}
	public void setRecieverPhno(Long recieverPhno) {
		this.recieverPhno = recieverPhno;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Id
	private Long id;
    private String sendername;
    private String recievername;
    private String senderaddress;
    private String recieveraddress;
    private Long recieverPhno;
    private String username;
}
