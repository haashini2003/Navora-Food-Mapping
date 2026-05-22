package com.navora.navora.controller;

import com.navora.navora.model.District;
import com.navora.navora.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/districts")
@CrossOrigin
public class DistrictController {

    @Autowired
    private DistrictRepository repo;

    @GetMapping("/by-province/{id}")
    public List<District> getByProvince(@PathVariable Long id) {
        return repo.findByProvinceId(id);
    }
}