package bryksa.controllers;

import bryksa.exceptions.TaskNotFoundException;
import bryksa.models.TaskModel;
import bryksa.repository.TasksRepository;
import bryksa.services.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TasksController {
    private final TasksService tasksService;
    private final TasksRepository tasksRepository;

    @Autowired
    public TasksController(TasksService tasksService, TasksRepository tasksRepository) {
        this.tasksService = tasksService;
        this.tasksRepository = tasksRepository;
    }

    @GetMapping("/")
    public List<TaskModel> getTodayTasks() {
        return tasksService.getTodayTasks();
    }

    @GetMapping("/tasks")
    public List<TaskModel> getAllTasks() {
        return tasksService.getAllTasks();
    }

    @GetMapping("/later")
    public List<TaskModel> getLaterTasks() {
        return tasksService.getLaterTasks();
    }

    @GetMapping("/archive")
    public List<TaskModel> getDoneTasks() {
        return tasksService.getDoneTasks();
    }

    @GetMapping("/calendar")
    public List<TaskModel> getUndoneTasks() {
        return tasksService.getUndoneTasks();
    }

    @PostMapping("/create-task")
    public void newTaskModel(@RequestBody TaskModel taskModel) {
        tasksService.save(taskModel);
    }

    @GetMapping("/tasks/{id}")
    TaskModel getTaskById(@PathVariable Integer id) {
        return tasksRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    @PutMapping("/tasks/{id}")
    TaskModel updateTask(@RequestBody TaskModel newTaskModel, @PathVariable Integer id) {
        return tasksRepository.findById(id)
                .map(taskModel -> {
                    taskModel.setDate(newTaskModel.getDate());
                    taskModel.setDetails(newTaskModel.getDetails());
                    taskModel.setTitle(newTaskModel.getTitle());
                    taskModel.setStatus(newTaskModel.getStatus());
                    taskModel.setPriority(newTaskModel.getPriority());
                    return tasksRepository.save(taskModel);
                }).orElseThrow(() -> new TaskNotFoundException(id));
    }

    @DeleteMapping("/tasks/{id}")
    String deleteTask(@PathVariable Integer id) {
        if (!tasksRepository.existsById(id)) {
            throw new TaskNotFoundException(id);
        }
        tasksRepository.deleteById(id);
        return "Task with id " + id + " has been deleted success.";
    }

    @GetMapping("/status-task/{id}")
    public void setTaskDone(@PathVariable Integer id) {
        TaskModel doneTask = tasksRepository.findById(id).orElseThrow(() -> new TaskNotFoundException(id));
        boolean status = doneTask.getStatus();
        doneTask.setStatus(!status);
        tasksRepository.save(doneTask);
    }
}
