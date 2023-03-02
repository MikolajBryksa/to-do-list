package bryksa.exceptions;

public class TaskNotFoundException extends RuntimeException {
    public TaskNotFoundException(Integer id) {
        super("Could not found the task with id: " + id);
    }
}
