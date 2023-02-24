//package bryksa.mapper;
//
//import bryksa.models.ToDoModel;
//import bryksa.response.ToDoResponse;
//import org.springframework.stereotype.Component;
//
//@Component
//public class ToDoMapper {
//    public ToDoResponse map(ToDoModel toDoModel) {
//        ToDoResponse toDoResponse = new ToDoResponse();
//        toDoResponse.setDate(toDoModel.getDate());
//        toDoResponse.setTitle(toDoModel.getTitle());
//        toDoResponse.setPriority(toDoModel.getPriority());
//        toDoResponse.setDetails(toDoModel.getDetails());
//        toDoResponse.setStatus(String.valueOf(toDoModel.getStatus()));
//        return toDoResponse;
//    }
//}
