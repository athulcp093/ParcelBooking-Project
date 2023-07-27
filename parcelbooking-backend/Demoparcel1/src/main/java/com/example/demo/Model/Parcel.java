package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Parcel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String sendername;
    private String recievername;
    private String senderaddress;
    private String recieveraddress;
    private Long recieverPhno;
    private String username;
//    private Long parcelWeight;
//    private String parcelType;
//    private Long customerid;
    
    
//	public Long getCustomerid() {
//		return customerid;
//	}
//	public void setCustomer_id(Long customerid) {
//		this.customerid = customerid;
//	}
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
//	public Long getParcelWeight() {
//		return parcelWeight;
//	}
//	public void setParcelWeight(Long parcelWeight) {
//		this.parcelWeight = parcelWeight;
//	}
//	public String getParcelType() {
//		return parcelType;
//	}
//	public void setParcelType(String parcelType) {
//		this.parcelType = parcelType;
//	}
	
    
	 public Parcel() {
	    }
	public Parcel(Long id, String sendername, String recievername, String senderaddress, String recieveraddress,
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
}
    
    
    
    
    
    
    
	