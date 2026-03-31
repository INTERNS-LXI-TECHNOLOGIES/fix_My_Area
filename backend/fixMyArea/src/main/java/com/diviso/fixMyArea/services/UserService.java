package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.User;
import com.diviso.fixMyArea.entities.VerificationStatus;
import com.diviso.fixMyArea.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.diviso.fixMyArea.entities.Location;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    private final LocationService locationService;

    public List<User> findAll() {
        return repository.findAll();
    }

    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }




    public User save(User entity,String address) {

      Location myLocation = locationService.findBYAddress(address);
  
      entity.setVerificationStatus(VerificationStatus.PENDING);
      entity.setGeoHome(myLocation);
      entity.setCredibilityScore(0);

       


        return repository.save(entity);

    }

  




    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
