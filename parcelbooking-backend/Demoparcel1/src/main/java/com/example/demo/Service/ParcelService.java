package com.example.demo.Service;

import com.example.demo.Model.Parcel;
import com.example.demo.Repository.ParcelRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParcelService {
    private final ParcelRepository parcelRepository;

    @Autowired
    public ParcelService(ParcelRepository parcelRepository) {
        this.parcelRepository = parcelRepository;
    }

    public Parcel addParcel(Parcel parcel) {
    	return parcelRepository.save(parcel);
    }

	public List<Parcel> getAllParcels() {
		return parcelRepository.findAll();
		
		
	}

	public Parcel getParcelById(Long id) {
		Optional<Parcel> optionalParcel = parcelRepository.findById(id);
        return optionalParcel.orElse(null);
		
	}
	
	public List<Parcel> getParcelByUsename(String username){
		
		List<Parcel> ls= new ArrayList<>();
		return parcelRepository.findAllByUsername(username);
	}

	
    
}
