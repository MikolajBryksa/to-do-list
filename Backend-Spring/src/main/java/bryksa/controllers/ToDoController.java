package bryksa.controllers;

import bryksa.exceptions.ModelNotFoundException;
import bryksa.models.ToDoModel;
import bryksa.repository.ToDoRepository;
import bryksa.services.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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
    public List<ToDoModel> getAllModels() {
        return toDoService.getAllModels();
    }
    
    @PostMapping("/api/create-task")
    public void newToDoModel(@RequestBody ToDoModel toDoModel){
        toDoService.save(toDoModel);
    }

    @GetMapping("/tasks/{id}")
    ToDoModel getModelById(@PathVariable Integer id){
        return toDoRepository.findById(id)
                .orElseThrow(()->new ModelNotFoundException(id));
    }

    @PutMapping("/tasks/{id}")
    ToDoModel updateModel(@RequestBody ToDoModel newToDoModel, @PathVariable Integer id){
        return toDoRepository.findById(id)
                .map(toDoModel -> {
                    toDoModel.setDate(newToDoModel.getDate());
                    toDoModel.setDetails(newToDoModel.getDetails());
                    toDoModel.setTitle(newToDoModel.getTitle());
                    toDoModel.setStatus(newToDoModel.getStatus());
                    toDoModel.setPriority(newToDoModel.getPriority());
                    return toDoRepository.save(toDoModel);
                }).orElseThrow(()->new ModelNotFoundException(id));
    }

    @DeleteMapping("/tasks/{id}")
    String deleteModel(@PathVariable Integer id){
        if(!toDoRepository.existsById(id)){
            throw new ModelNotFoundException(id);
        }
        toDoRepository.deleteById(id);
        return "Task with id " + id + " has beem deleted success.";
    }

}
