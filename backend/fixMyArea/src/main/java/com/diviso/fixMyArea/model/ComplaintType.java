package com.diviso.fixMyArea.model;

public enum ComplaintType{

    ELECTRICITY_OUTAGE(100),        
    WATER_SUPPLY_ISSUE(100),        
    ROAD_DAMAGE(50),               
    STREET_LIGHT_NOT_WORKING(80),  
    WASTE_COLLECTION_DELAY(50),    
    DRAINAGE_BLOCK(70),            
    MOSQUITO_PROBLEM(60),          
    TOILET_MAINTENANCE(80),        
    TREE_FALL(50),                 
    ANIMAL_NUISANCE(60),          
    LAND_DISPUTE(30),              
    BUILDING_PERMISSION_ISSUE(30), 
    FLOODING(100),                  
    HEALTH_HAZARD(100),             
    PUBLIC_TRANSPORT_ISSUE(50),   
    ILLEGAL_CONSTRUCTION(40),      
    NOISE_POLLUTION(80),           
    STREET_CLEANING_REQUEST(60),  
    PIPE_LEAKAGE(95),
    OTHERS(45);              


    private int priorityLevel;


    private ComplaintType(int priorityLevel){
   
        this.priorityLevel = priorityLevel;


}
 
   public int getPriorityLevel(){

   return priorityLevel;

   }



}