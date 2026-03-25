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

public class District {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;
@ManyToOne 
@JoinColumn(name = "state_Id") 
private State state;

@OneToMany(mappedBy = "district")
private List<Block> blocks;

public District (String name,State state){

    this.name=name;
    this.state = state;

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

public List<Block> getBlocks() {
    return blocks;
}


public void setBlocks(List<Block> blocks) {
    this.blocks = blocks;
}

    @Override
    public String toString() {

        return "District{name='" + name + "'}";
    }
    



}