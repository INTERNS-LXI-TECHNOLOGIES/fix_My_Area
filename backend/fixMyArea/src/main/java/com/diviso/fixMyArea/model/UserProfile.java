package com.diviso.fixMyArea.model;

import java.security.Identity;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class UserProfile{

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;
private String profilePicture;
private String email;
@OneToOne
@JoinColumn(name = "state_id")
private State state;

@OneToOne
@JoinColumn(name = "district_id")
private District district;
@OneToOne
@JoinColumn(name = "punchayth_id")
private Punchyath myPanchayath;
@OneToMany(mappedBy = "userProfile")
private List<Complaint> myComplaint;


public UserProfile(){

}


public UserProfile(String name,String profilePicture,String email,State state,
    District district,Punchyath myPanchayth,List<Complaint> myComplaint){
        this.name = name;
        this.profilePicture =profilePicture;
        this.email = email;
        this.state = state ;
        this.district = district;
        this. myPanchayath = myPanchayth;
        this.myComplaint = myComplaint;

}



    public long getId() { return id; }
    public String getName() { return name; }
    public String getProfilePicture() { return profilePicture; }
    public String getEmail() { return email; }
    public State getState() { return state; }
    public District getDistrict() { return district; }
    public Punchyath getMyPanchayath() { return myPanchayath; }
    public List<Complaint> getMyComplaint() { return myComplaint; }

 
    public void setId(long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }
    public void setEmail(String email) { this.email = email; }
    public void setState(State state) { this.state = state; }
    public void setDistrict(District district) { this.district = district; }
    public void setMyPanchayath(Punchyath myPanchayath) { this.myPanchayath = myPanchayath; }
    public void setMyComplaint(List<Complaint> myComplaint) { this.myComplaint = myComplaint; }


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