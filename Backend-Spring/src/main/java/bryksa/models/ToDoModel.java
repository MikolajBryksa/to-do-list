package bryksa.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "to_do_model")
public class ToDoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String date;
    private String title;
    private String details;
    private String priority;
    private String status;

    public ToDoModel() {
    }

    public ToDoModel(Integer id, String date, String title, String details, String priority, String status) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.status = status;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getTitle() {
        return title;
    }

    public String getDetails() {
        return details;
    }

    public String getPriority() {
        return priority;
    }

    public String getStatus() {
        return status;
    }
}
