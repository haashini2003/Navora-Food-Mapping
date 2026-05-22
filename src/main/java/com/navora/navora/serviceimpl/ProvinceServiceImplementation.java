package com.navora.navora.serviceimpl;

import com.navora.navora.model.Province;
import com.navora.navora.repository.ProvinceRepository;
import com.navora.navora.service.ProvinceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceServiceImplementation implements ProvinceService {

    private final ProvinceRepository repo;

    public ProvinceServiceImplementation(ProvinceRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Province> getAllProvinces() {
        return repo.findAll();
    }
}