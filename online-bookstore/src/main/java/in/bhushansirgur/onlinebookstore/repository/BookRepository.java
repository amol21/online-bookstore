package in.bhushansirgur.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.bhushansirgur.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
	
}
