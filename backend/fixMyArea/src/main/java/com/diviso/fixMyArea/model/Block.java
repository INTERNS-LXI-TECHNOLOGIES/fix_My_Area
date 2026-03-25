package com.diviso.fixMyArea.model;

import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Block{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String name;
@ManyToOne
@JoinColumn(name = "district_Id")
private District district;
@OneToMany(mappedBy = "block")
private List<Punchyath> punchayath;


public Block(){


}

public Block(String name, District district) {
        this.name = name;
        this.district = district;
    }


public long getId() {
    return id;
}

public void setId(long id) {
    this.id = id;
}


public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}


public District getDistrict() {
    return district;
}

public void setDistrict(District district) {
    this.district = district;
}


public List<Punchyath> getPunchayath() {
    return punchayath;
}

public void setPunchayath(List<Punchyath> punchayath) {
    this.punchayath = punchayath;
}






}