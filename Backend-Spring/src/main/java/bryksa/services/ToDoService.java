package bryksa.services;

import bryksa.models.ToDoModel;
import bryksa.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ToDoService {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDoModel> getAllItems(){
        return toDoRepository.findAll();
    }
    
}
