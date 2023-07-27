package com.example.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.TrackingInfo;

@Repository
public interface TrackingInfoRepository extends JpaRepository<TrackingInfo, Long> {

	Optional<TrackingInfo> findByParcelId(long id);
    // Custom query methods, if needed
}

