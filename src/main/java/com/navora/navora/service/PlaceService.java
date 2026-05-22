package com.navora.navora.service;

import com.navora.navora.model.Place;
import java.util.List;

public interface PlaceService {

    List<Place> getByCityId(Long cityId);

    Place getById(Long id);
}