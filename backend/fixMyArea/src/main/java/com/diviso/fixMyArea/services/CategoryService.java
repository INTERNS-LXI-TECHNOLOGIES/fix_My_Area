package com.diviso.fixMyArea.services;

import lombok.RequiredArgsConstructor;

import com.diviso.fixMyArea.entities.Category;
import com.diviso.fixMyArea.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository repository;

    public List<Category> findAll() {

        return repository.findAll();
        
    }

    public Optional<Category> findById(Long id) {
        return repository.findById(id);
    }

    public Category save(Category entity) {
        return repository.save(entity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
