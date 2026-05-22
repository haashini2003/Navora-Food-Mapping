package com.navora.navora.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private Double rating;

    private String locationLink;

    // =========================
    // RELATION 1: CITY
    // =========================
    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonBackReference
    private City city;

    // =========================
    // RELATION 2: TYPE
    // =========================
    @ManyToOne
    @JoinColumn(name = "type_id")
    private PlaceType type;

    private String special;
    private String food;
    private String facilities;
}