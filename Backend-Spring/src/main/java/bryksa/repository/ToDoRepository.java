package bryksa.repository;

import bryksa.models.ToDoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDoModel,Integer> {

}
