package bryksa.exceptions;

import java.nio.file.attribute.UserPrincipalNotFoundException;

public class ModelNotFoundException extends RuntimeException {
    public ModelNotFoundException(Integer id) {
        super("Could not found the task with id: "+ id);
    }
}
