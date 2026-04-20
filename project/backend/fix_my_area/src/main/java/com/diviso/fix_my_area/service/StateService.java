package com.diviso.fix_my_area.service;

import com.diviso.fix_my_area.entity.State;
import com.diviso.fix_my_area.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StateService {

    @Autowired
    private StateRepository repository;

    public List<State> findAll() {
        return repository.findAll();
    }

    public Optional<State> findById(Long id) {
        return repository.findById(id);
    }

    public State save(State entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
