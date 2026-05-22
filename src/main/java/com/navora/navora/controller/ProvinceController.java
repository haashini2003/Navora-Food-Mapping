package com.navora.navora.controller;

import com.navora.navora.model.Province;
import com.navora.navora.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/provinces")
@CrossOrigin("*")
public class ProvinceController {

    @Autowired
    private ProvinceRepository repo;

    @GetMapping
    public List<Province> getAll() {
        return repo.findAll();
    }
}