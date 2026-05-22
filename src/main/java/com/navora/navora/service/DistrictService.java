package com.navora.navora.service;

import com.navora.navora.model.District;
import java.util.List;

public interface DistrictService {
    List<District> getByProvinceId(Long provinceId);
}