package in.bhushansirgur.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import in.bhushansirgur.onlinebookstore.entity.Book;
@CrossOrigin("*")
public interface BookRepository extends JpaRepository<Book, Long>{
	
}
