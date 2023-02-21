package bryksa.controllers;

import bryksa.models.ToDoModel;
import bryksa.repository.ToDoRepository;
import bryksa.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ToDoController {
    private final ToDoService toDoService;
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoController(ToDoService toDoService, ToDoRepository toDoRepository) {
        this.toDoService = toDoService;
        this.toDoRepository = toDoRepository;
    }

    @GetMapping("/tasks")
    public List<ToDoModel> getAllItems() {
        return toDoService.getAllItems();
    }
    
    @PostMapping("/create-task")
    ToDoModel newToDoModel(@RequestBody ToDoModel newToDoModel){
        return toDoRepository.save(newToDoModel);
    }

}
