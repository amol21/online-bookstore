package in.bhushansirgur.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import in.bhushansirgur.onlinebookstore.entity.Book;
import in.bhushansirgur.onlinebookstore.entity.BookCategory;
@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	
	@Autowired
	EntityManager entityManager;

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		//config.exposeIdsFor(Book.class);
		//config.exposeIdsFor(BookCategory.class);
		
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType)
				.toArray(Class[]::new));
	}
	
}
