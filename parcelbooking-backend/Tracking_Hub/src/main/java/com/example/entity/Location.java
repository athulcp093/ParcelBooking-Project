package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String location;
    @ManyToOne
    @JoinColumn(name="userid")
    private TrackingInfo tf;
	public TrackingInfo getTf() {
		return tf;
	}
	public void setTf(TrackingInfo tf) {
		this.tf = tf;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
//	public Location(Long id, String location) {
//		super();
//		this.id = id;
//		this.location = location;
//	}
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

    // Constructors, getters, and setters...

   

    // Constructors, getters, and setters...
}
