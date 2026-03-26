package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.State;
import com.diviso.fixMyArea.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StateService {

    private final StateRepository repository;

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
