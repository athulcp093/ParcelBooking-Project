package com.example.dto;

import java.util.List;

public class TrackingInfoDTO {

	private Long id;
    private Long parcelId;
    private String currentStatus;
    private List<String> location;
	public Long getId() {
		return id;
	}
	@Override
	public String toString() {
		return "TrackingInfoDTO [id=" + id + ", parcelId=" + parcelId + ", currentStatus=" + currentStatus
				+ ", location=" + location + "]";
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
	public void setLocation(List<String> string) {
		this.location = string;
	}
}
