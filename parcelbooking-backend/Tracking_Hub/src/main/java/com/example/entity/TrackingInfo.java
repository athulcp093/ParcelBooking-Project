package com.example.entity;



import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

@Entity
public class TrackingInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long parcelId;
    private String currentStatus;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "parcel_location", joinColumns = @JoinColumn(name = "parcelId"))
    @Column(name = "location")
    private List<String> location;
//    private LocalDateTime timestamp;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getParcelId() {
		return parcelId;
	}
	public void setParcelId(Long parcelId) {
		this.parcelId = parcelId;
	}
	public String getCurrentStatus() {
		return currentStatus;
	}
	public void setCurrentStatus(String currentStatus) {
		this.currentStatus = currentStatus;
	}
	public List<String> getLocation() {
		return location;
	}
	@Override
	public String toString() {
		return "TrackingInfo [id=" + id + ", parcelId=" + parcelId + ", currentStatus=" + currentStatus + ", location="
				+ location + "]";
	}
	public void setLocation(List<String> location) {
		this.location = location;
	}
	public TrackingInfo(Long parcelId, String currentStatus, List<String> location) {
		super();
		this.id = id;
		this.parcelId = parcelId;
		this.currentStatus = currentStatus;
		this.location = location;
	}
	public TrackingInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

