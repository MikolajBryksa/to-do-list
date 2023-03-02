package bryksa.services;

import bryksa.models.TaskModel;
import bryksa.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TasksService {
    private final TasksRepository tasksRepository;

    @Autowired
    public TasksService(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    public List<TaskModel> getAllTasks() {
        return tasksRepository.findAll();
    }

    public List<TaskModel> getTodayTasks() {
        List<TaskModel> allTasks = getAllTasks();
        List<TaskModel> todayTasks = new ArrayList<>();

        for (TaskModel todayTask : allTasks) {
            if (todayTask.getStatus().equals(false) &&
                    todayTask.getDate().equals(LocalDate.now()) || todayTask.getDate().isBefore(LocalDate.now())) {
                todayTasks.add(todayTask);
            }
        }

        List<TaskModel> filteredTasks = todayTasks.stream()
                .sorted(Comparator.comparing(TaskModel::getPriority).reversed())
                .collect(Collectors.toList());
        return filteredTasks;
    }

    public List<TaskModel> getLaterTasks() {
        List<TaskModel> allTasks = getAllTasks();
        List<TaskModel> laterTasks = new ArrayList<>();
        for (TaskModel laterTask : allTasks)
            if (laterTask.getStatus().equals(false) &&
                    !(laterTask.getDate().equals(LocalDate.now())) && !(laterTask.getDate().isBefore(LocalDate.now()))) {
                laterTasks.add(laterTask);
            }

        List<TaskModel> filteredTasks = laterTasks.stream()
                .sorted(Comparator.comparing(TaskModel::getDate))
                .collect(Collectors.toList());
        return filteredTasks;
    }

    public List<TaskModel> getUndoneTasks() {
        List<TaskModel> allTasks = getAllTasks();
        List<TaskModel> undoneTasks = new ArrayList<>();
        for (TaskModel undoneTask : allTasks)
            if (undoneTask.getStatus().equals(false)) {
                undoneTasks.add(undoneTask);
            }
        return undoneTasks;
    }

    public List<TaskModel> getDoneTasks() {
        List<TaskModel> allTasks = getAllTasks();
        List<TaskModel> doneTasks = new ArrayList<>();
        for (TaskModel doneTask : allTasks)
            if (doneTask.getStatus().equals(true)) {
                doneTasks.add(doneTask);
            }
        return doneTasks;
    }

    public void save(TaskModel newTaskModel) {
        tasksRepository.save(newTaskModel);
    }
}
