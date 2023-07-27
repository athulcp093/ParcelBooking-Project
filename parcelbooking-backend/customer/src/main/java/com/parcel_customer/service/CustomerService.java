package com.parcel_customer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.parcel_customer.model.Customer;
import com.parcel_customer.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository custRepo;
	
	public List<Customer> getAllCustomers(){
		
		return custRepo.findAll();
	}
	public ResponseEntity<Customer> getCustomerById(long id) {
		
		Optional<Customer> c= custRepo.findById(id);
		if(c.isPresent()) {
		    return ResponseEntity.ok().body(c.get());
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	public ResponseEntity<Customer> getCustomerByName(String name){
		
		Optional<Customer> c= custRepo.findByCustomername(name);
		if(c.isPresent()) {
			return ResponseEntity.ok().body(c.get());
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	public Customer addCustomer(Customer c) {
		
		custRepo.save(c);
		return c;
	}
	public ResponseEntity<Customer> updateCustomerById(long id, Customer cs) {
		
		Optional<Customer> c= custRepo.findById(id);
		if(c.isPresent()) {
			c.get().setCustomername(cs.getCustomername());
			c.get().setPhoneno(cs.getPhoneno());
			c.get().setAddress(cs.getAddress());
			custRepo.save(c.get());
			return ResponseEntity.ok().body(c.get());
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	public ResponseEntity<Customer> deleteCustomerById(long id) {
		
		Optional<Customer> c= custRepo.findById(id);
		if(c.isPresent()) {
			custRepo.delete(c.get());
			return ResponseEntity.ok().body(c.get());
		}
		else {
			 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
}
