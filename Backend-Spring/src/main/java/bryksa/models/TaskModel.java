package bryksa.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity(name = "tasks")
public class TaskModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate date;
    private String title;
    private String details;
    private String priority;
    private Boolean status;

    public TaskModel() {
    }

    public TaskModel(Integer id, LocalDate date, String title, String details, String priority, Boolean status) {
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

    public void setDate(LocalDate date) {
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

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public LocalDate getDate() {
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

    public Boolean getStatus() {
        return status;
    }
}
