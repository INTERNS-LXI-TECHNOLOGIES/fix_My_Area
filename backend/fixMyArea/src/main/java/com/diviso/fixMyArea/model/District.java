package com.diviso.fixMyArea.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class District{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;


public District (String name ){

    this.name=name;
}

    
public District(){


}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
   public long getId() {
    return id;
}

public void setId(long id) {
    this.id = id;
}


    @Override
    public String toString() {

        return "District{name='" + name + "'}";
    }
    



}