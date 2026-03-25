package com.diviso.fixMyArea.model;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class Complaint{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;


@ManyToOne
@JoinColumn(name = "userProfile_Id")
private UserProfile userProfile;

private String complaint;

private String image;

private long vote;

public Complaint(){

}

public Complaint(UserProfile userProfile,String complaint,
                  String image,long vote){

this.userProfile = userProfile;

this.complaint = complaint;
this.image = image;
this.vote = vote;

}


public String getImage() {
    return image;
}


public void setImage(String image) {
    this.image = image;
}

public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }



    public String getComplaint() {
        return complaint;
    }

    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

public long getVote() {
    return vote;
}


public void setVote(long vote) {
    this.vote = vote;
}

}