package com.diviso.fixMyArea.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class State{
@Id    
@GeneratedValue(strategy = GenerationType.IDENTITY)

private long id;    
private String name;



public State(){

}

public State(String name ){

    this.name=name;
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
        return "State{name='" + name + "'}";
    }
    


}