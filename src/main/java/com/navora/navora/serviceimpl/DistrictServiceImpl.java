package com.navora.navora.serviceimpl;

import com.navora.navora.model.District;
import com.navora.navora.repository.DistrictRepository;
import com.navora.navora.service.DistrictService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrictServiceImpl implements DistrictService {

    private final DistrictRepository repo;

    public DistrictServiceImpl(DistrictRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<District> getByProvinceId(Long provinceId) {
        return repo.findByProvinceId(provinceId);
    }
}