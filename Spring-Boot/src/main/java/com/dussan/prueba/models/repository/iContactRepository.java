
package com.dussan.prueba.models.repository;

import com.dussan.prueba.models.entity.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iContactRepository extends MongoRepository<Contact, Long> {
    
}
 