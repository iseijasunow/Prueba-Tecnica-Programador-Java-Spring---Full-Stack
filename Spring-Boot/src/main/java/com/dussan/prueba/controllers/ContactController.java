package com.dussan.prueba.controllers;

import com.dussan.prueba.models.entity.Contact;
import com.dussan.prueba.models.repository.iContactRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api")
public class ContactController {
    
    @Autowired
    private iContactRepository repository;
    
   
    @PostMapping("/contact")
	public Contact create(@Validated @RequestBody Contact p) {
		return repository.insert(p);
	}

	@GetMapping("/")
	public List<Contact> readAll() {
		return repository.findAll();
	}

	@PutMapping("/contact/{id}")
	public Contact update(@PathVariable String id, @Validated @RequestBody Contact p) {
		return repository.save(p);
	}

	@DeleteMapping("/contact/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}

}
 