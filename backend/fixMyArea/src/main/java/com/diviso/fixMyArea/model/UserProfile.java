package com.diviso.fixMyArea.model;

import java.security.Identity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserProfile{

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;
private String profilePicture;
private String email;
private State state;
private District distric;
private Punchyath myPachayth;
private Complaint myComplaint;


public UserProfile(){

}


public UserProfile(String name,String profilePicture,String email,State state,
    District district,Punchayath myPachayth,Complaint myComplaint){

}



    public long getId() { return id; }
    public String getName() { return name; }
    public String getProfilePicture() { return profilePicture; }
    public String getEmail() { return email; }
    public State getState() { return state; }
    public District getDistrict() { return district; }
    public Panchayath getMyPanchayath() { return myPanchayath; }
    public Complaint getMyComplaint() { return myComplaint; }

 
    public void setId(long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }
    public void setEmail(String email) { this.email = email; }
    public void setState(State state) { this.state = state; }
    public void setDistrict(District district) { this.district = district; }
    public void setMyPanchayath(Panchayath myPanchayath) { this.myPanchayath = myPanchayath; }
    public void setMyComplaint(Complaint myComplaint) { this.myComplaint = myComplaint; }


    @Override
public String toString() {
    return "UserProfile [" +
           "id=" + id + 
           ", name='" + name + '\'' + 
           ", profilePicture='" + profilePicture + '\'' + 
           ", email='" + email + '\'' + 
           ", state=" + state + 
           ", district=" + district + 
           ", myPanchayath=" + myPanchayath + 
           ", myComplaint=" + myComplaint + 
           ']';
}
    
}