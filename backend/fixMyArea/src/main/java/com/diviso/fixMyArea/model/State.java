package com.diviso.fixMyArea.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

import jakarta.persistence.Entity;

@Entity
public class State{
@Id    
@GeneratedValue(strategy = GenerationType.IDENTITY)

private long id;    
private String name;
@OneToMany(mappedBy = "state")  // many districts belong to one state 


private List<District> districts;


public State(){

}

public State(String name ,List<District> districts){

    this.name=name;
    this.districts = districts;

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

public List<District> getDistricts() {
    return districts;
}

public void setDistricts(List<District> districts) {
    this.districts = districts;
}

    

    @Override
    public String toString() {
        return "State{name='" + name + "'}";
    }
    


}