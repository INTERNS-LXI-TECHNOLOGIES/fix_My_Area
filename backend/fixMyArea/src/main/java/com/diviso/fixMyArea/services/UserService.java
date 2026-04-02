package com.diviso.fixMyArea.services;
import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.User;
import com.diviso.fixMyArea.entities.VerificationStatus;
import com.diviso.fixMyArea.repository.UserRepository;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

 
import com.diviso.fixMyArea.entities.Location;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;



@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    private final LocationService locationService;

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    public List<User> findAll(){

        return repository.findAll();

    }

    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }


    public User save(User entity,String address){

      Location myLocation = locationService.findBYAddress(address);
 
     if(myLocation == null){

      log.error("LOCATION NOT FOUND FOR ADDRESS: " + address);

     }else{

        log.info("LOCATION FOUND: " + myLocation.getAddress());

     }
       

      entity.setVerificationStatus(VerificationStatus.PENDING);
      entity.setGeoHome(myLocation);
      entity.setCredibilityScore(0); 
      return repository.save(entity);
   


    }

  
    public void deleteById(Long id) {

        repository.deleteById(id);

    }



 public User findByUsername(String username){
    
    return repository.findByName(username);

}

}