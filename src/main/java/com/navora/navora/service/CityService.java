package com.navora.navora.service;

import com.navora.navora.model.City;
import java.util.List;

public interface CityService {
    List<City> getByDistrictId(Long districtId);
}