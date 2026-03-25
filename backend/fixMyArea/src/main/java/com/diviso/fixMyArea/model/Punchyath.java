package com.diviso.fixMyArea.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Punchyath {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;
@ManyToOne
@JoinColumn(name = "block_Id")
private Block block;


public Punchyath (String name,Block block ){

    this.name=name;
    this.block = block;

    
}

    
public Punchyath(){


}
  
   public long getId() {
    return id;
}

public void setId(long id){
    this.id = id;

    
}


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    

    @Override
    public String toString() {
        
        return "Punchayth{name='" + name + "'}";
    }
    




}
