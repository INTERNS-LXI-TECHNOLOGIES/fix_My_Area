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
    LAND_DISPUTE(),              
    BUILDING_PERMISSION_ISSUE, 
    FLOODING,                  
    HEALTH_HAZARD,             
    PUBLIC_TRANSPORT_ISSUE,   
    ILLEGAL_CONSTRUCTION,      
    NOISE_POLLUTION,           
    STREET_CLEANING_REQUEST,  
    PIPE_LEAKAGE,              
    IRRIGATION_ISSUE 


    private int priorityLevel;


    private ComplaintType(int priorityLevel){


    }


}