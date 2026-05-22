package com.navora.navora.serviceimpl;

import com.navora.navora.model.City;
import com.navora.navora.repository.CityRepository;
import com.navora.navora.service.CityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImplementation implements CityService {

    private final CityRepository repo;

    public CityServiceImplementation(CityRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<City> getByDistrictId(Long districtId) {
        return repo.findByDistrictId(districtId);
    }
}