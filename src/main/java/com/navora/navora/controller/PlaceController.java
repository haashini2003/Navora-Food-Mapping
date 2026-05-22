package com.navora.navora.controller;

import com.navora.navora.model.Place;
import com.navora.navora.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/places")
@CrossOrigin("*")
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;

    @GetMapping
    public List<Map<String, Object>> getAllPlaces() {

        List<Place> places = placeRepository.findAll();

        List<Map<String, Object>> result = new ArrayList<>();

        for (Place p : places) {
            Map<String, Object> map = new HashMap<>();
            map.put("id", p.getId());
            map.put("name", p.getName());
            map.put("description", p.getDescription());
            map.put("rating", p.getRating());
            map.put("locationLink", p.getLocationLink());
            result.add(map);
        }

        return result;
    }

    @GetMapping("/city/{cityId}")
    public List<Place> getByCity(@PathVariable Long cityId) {
        try {
            return placeRepository.findByCityId(cityId);
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    public Place getById(@PathVariable Long id) {
        return placeRepository.findById(id).orElse(null);
    }
}