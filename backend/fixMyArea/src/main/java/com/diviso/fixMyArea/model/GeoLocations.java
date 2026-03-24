package com.diviso.fixMyArea.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


@Entity
public class GeoLocations{
@Id    
@GeneratedValue(strategy = GenerationType.IDENTITY)

private long id;

@ManyToOne
private State name;
@ManyToOne
private List<District> district;
@ManyToOne
private Punchyath panchayath;
  

public State getName() {
    return name;
}

public void setName(State name) {
    this.name = name;
}

public List<District> getDistrict() {
    return district;
}

public void setDistrict(List<District> district) {
    this.district = district;
}

public Punchyath getPanchayath() {
    return panchayath;
}

public void setPanchayath(Punchyath panchayath) {
    this.panchayath = panchayath;
}

@Override
public String toString() {
    return "GeoLocation{" +
            "name=" + name +
            ", district=" + district +
            ", panchayath=" + panchayath +
            '}';
}

}