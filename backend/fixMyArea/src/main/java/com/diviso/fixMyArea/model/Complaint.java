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

private  ComplaintType complaintType;
@ManyToOne
@JoinColumn(name = "userProfile_Id")
private UserProfile userProfile;

private String complaint;

public Complaint(){
    
}

public Complaint(UserProfile userProfile,ComplaintType complaintType,String complaint){

this.userProfile = userProfile;
this.complaintType = complaintType;
this.complaint = complaint;


}

public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ComplaintType getComplaintType() {
        return complaintType;
    }

    public void setComplaintType(ComplaintType complaintType) {
        this.complaintType = complaintType;
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



}