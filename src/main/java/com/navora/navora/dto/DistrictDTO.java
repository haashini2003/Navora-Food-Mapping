package com.navora.navora.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter @Setter
public class DistrictDTO {
    private Long id;
    private String name;
    private List<CityDTO> cities;
}