package com.parcel_customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parcel_customer.model.Customer;
import com.parcel_customer.service.CustomerService;

@RestController
@RequestMapping("customer")
@CrossOrigin
//(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class CustomerController {

	  @Autowired
      CustomerService custService;
	  @GetMapping("/get/{id}")
	  public ResponseEntity<Customer> getCustomerById(@PathVariable long id){	  
		  return custService.getCustomerById(id);
	  }
	  @GetMapping("/getbyname/{name}")
	  public ResponseEntity<Customer> getCustomerByName(@PathVariable String name){
		  return custService.getCustomerByName(name);
	  }
	  @GetMapping("/getall")
	  public ResponseEntity<List<Customer>> getAllCustomers(){
		  return ResponseEntity.ok().body(custService.getAllCustomers());
	  }
	  @PostMapping("/add")
	  public ResponseEntity<Customer> addCustomer(@RequestBody Customer c){
		  return ResponseEntity.ok().body(custService.addCustomer(c));
	  }
	  @PutMapping("/update/{id}")
	  public ResponseEntity<Customer> updateCustomer(@PathVariable long id,@RequestBody Customer cs){
		  
		  return custService.updateCustomerById(id, cs);

	  }
	  @DeleteMapping("/delete/{id}")
	  public ResponseEntity<Customer> deleteCustomer(@PathVariable long id){
		 
	    return custService.deleteCustomerById(id);
		  
	  }
	  
  
}
