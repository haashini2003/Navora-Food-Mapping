package com.navora.navora.serviceimpl;

import com.navora.navora.model.Place;
import com.navora.navora.repository.PlaceRepository;
import com.navora.navora.service.PlaceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository repo;

    public PlaceServiceImpl(PlaceRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Place> getByCityId(Long cityId) {
        return repo.findByCityId(cityId);
    }

    @Override
    public Place getById(Long id) {
        return repo.findById(id).orElse(null);
    }
}