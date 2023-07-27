package com.parcel_customer.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long customerid;
	private String customername;
	private String password;
	private long phoneno;
	private String address;
	public long getCustomerid() {
		return customerid;
	}
	public void setCustomerid(long customerid) {
		this.customerid = customerid;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Customer() {}
	public Customer(long customerid, String customername, String password, long phoneno, String address) {
		super();
		this.customerid = customerid;
		this.customername = customername;
		this.password = password;
		this.phoneno = phoneno;
		this.address = address;
	}
	
	
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//	private List<Parcel> plist;
	
	
}
