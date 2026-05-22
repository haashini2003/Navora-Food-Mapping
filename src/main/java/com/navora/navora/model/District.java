package com.navora.navora.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // MANY districts → ONE province
    @ManyToOne
    @JoinColumn(name = "province_id")
    @JsonBackReference
    private Province province;

    // ONE district → MANY cities
    @OneToMany(
            mappedBy = "district",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonManagedReference
    private List<City> cities = new ArrayList<>();
}