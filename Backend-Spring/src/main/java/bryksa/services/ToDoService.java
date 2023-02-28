package bryksa.services;

import bryksa.models.ToDoModel;
import bryksa.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ToDoService {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDoModel> getAllModels(){
        return toDoRepository.findAll();
    }

    public List<ToDoModel> getTodayModels(){
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> todayModels = new ArrayList<>();
        for (ToDoModel todayTask: allModels) {
            if (todayTask.getDate().equals(LocalDate.now()) && todayTask.getStatus().equals(false)) {
                todayModels.add(todayTask);
            }
        }
        return todayModels;
    }

    public List<ToDoModel> getDoneModels(){
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> doneModels = new ArrayList<>();
        for (ToDoModel doneTask: allModels)
            if (doneTask.getStatus().equals(true)) {
                doneModels.add(doneTask);
            }
        return doneModels;
    }

    public List<ToDoModel> getUndoneModels(){
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> undoneModels = new ArrayList<>();
        for (ToDoModel undoneTask: allModels)
            if (undoneTask.getStatus().equals(false) && !(undoneTask.getDate().isEqual(LocalDate.now()))) {
                undoneModels.add(undoneTask);
            }
        return undoneModels;
    }

    public void save(ToDoModel newToDoModel) {
         toDoRepository.save(newToDoModel);
    }
}
