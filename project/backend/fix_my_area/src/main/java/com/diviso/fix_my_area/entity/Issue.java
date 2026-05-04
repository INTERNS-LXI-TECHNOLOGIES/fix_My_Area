package com.diviso.fix_my_area.entity;

import jakarta.persistence.*;

@Entity
public class Issue {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String category;
    private String distance;
    private String title;
    private String status;
    private String time;
    private String authority;
    private String image;
    private int support;
    private int concern;
    private boolean urgent;
    private String priority;

    // Default Constructor
    public Issue() {}

    // Getters
    public Long getId() { return id; }
    public String getCategory() { return category; }
    public String getDistance() { return distance; }
    public String getTitle() { return title; }
    public String getStatus() { return status; }
    public String getTime() { return time; }
    public String getAuthority() { return authority; }
    public String getImage() { return image; }
    public int getSupport() { return support; }
    public int getConcern() { return concern; }
    public boolean isUrgent() { return urgent; }
    public String getPriority() { return priority; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setCategory(String category) { this.category = category; }
    public void setDistance(String distance) { this.distance = distance; }
    public void setTitle(String title) { this.title = title; }
    public void setStatus(String status) { this.status = status; }
    public void setTime(String time) { this.time = time; }
    public void setAuthority(String authority) { this.authority = authority; }
    public void setImage(String image) { this.image = image; }
    public void setSupport(int support) { this.support = support; }
    public void setConcern(int concern) { this.concern = concern; }
    public void setUrgent(boolean urgent) { this.urgent = urgent; }
    public void setPriority(String priority) { this.priority = priority; }
}