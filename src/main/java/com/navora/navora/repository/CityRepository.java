package com.navora.navora.repository;

import com.navora.navora.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository
        extends JpaRepository<City, Long> {

    List<City> findByDistrictId(Long districtId);
}