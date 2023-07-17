package in.bhushansirgur.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.bhushansirgur.onlinebookstore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
