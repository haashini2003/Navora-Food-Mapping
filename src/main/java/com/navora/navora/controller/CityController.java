package com.navora.navora.controller;

import com.navora.navora.model.City;
import com.navora.navora.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin
public class CityController {

    @Autowired
    private CityRepository repo;

    @GetMapping("/by-district/{id}")
    public List<City> getByDistrict(@PathVariable Long id) {
        return repo.findByDistrictId(id);
    }
}