package com.example.util;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name="parcelservice")
public interface Demoparcel1Interface {

	@GetMapping("/parcels/getall")
	public ResponseEntity<?> getall();
}
