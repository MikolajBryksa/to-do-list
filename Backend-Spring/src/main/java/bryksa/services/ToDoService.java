package bryksa.services;

import bryksa.models.ToDoModel;
import bryksa.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ToDoService {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoService(ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDoModel> getAllModels() {
        return toDoRepository.findAll();
    }

    public List<ToDoModel> getTodayModels() {
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> todayModels = new ArrayList<>();

        for (ToDoModel todayTask : allModels) {
            if (todayTask.getStatus().equals(false) &&
                    todayTask.getDate().equals(LocalDate.now()) || todayTask.getDate().isBefore(LocalDate.now())) {
                todayModels.add(todayTask);
            }
        }

        List<ToDoModel> collectedModels = todayModels.stream()
//                .sorted(Comparator.comparing(ToDoModel::getDate))
                .sorted(Comparator.comparing(ToDoModel::getPriority).reversed())
                .collect(Collectors.toList());
        return collectedModels;
    }

    public List<ToDoModel> getLaterModels() {
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> laterModels = new ArrayList<>();
        for (ToDoModel laterTask : allModels)
            if (laterTask.getStatus().equals(false) &&
                    !(laterTask.getDate().equals(LocalDate.now())) && !(laterTask.getDate().isBefore(LocalDate.now()))) {
                laterModels.add(laterTask);
            }

        List<ToDoModel> collectedModels = laterModels.stream()
                .sorted(Comparator.comparing(ToDoModel::getDate))
                .collect(Collectors.toList());
        return collectedModels;
    }

    public List<ToDoModel> getUndoneModels() {
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> undoneModels = new ArrayList<>();
        for (ToDoModel undoneTask : allModels)
            if (undoneTask.getStatus().equals(false)) {
                undoneModels.add(undoneTask);
            }
        return undoneModels;
    }

    public List<ToDoModel> getDoneModels() {
        List<ToDoModel> allModels = getAllModels();
        List<ToDoModel> doneModels = new ArrayList<>();
        for (ToDoModel doneTask : allModels)
            if (doneTask.getStatus().equals(true)) {
                doneModels.add(doneTask);
            }
        return doneModels;
    }

    public void save(ToDoModel newToDoModel) {
        toDoRepository.save(newToDoModel);
    }
}
