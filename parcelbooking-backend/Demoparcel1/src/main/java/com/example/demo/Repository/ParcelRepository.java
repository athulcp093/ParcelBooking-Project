package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Parcel;

@Repository

public interface ParcelRepository extends JpaRepository<Parcel, Long> {

	List<Parcel> findAllByUsername(String username);

}
