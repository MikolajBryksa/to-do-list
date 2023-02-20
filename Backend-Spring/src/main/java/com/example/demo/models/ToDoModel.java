package com.example.demo.models;

import java.util.Objects;

public class ToDoModel {

    private int id = 1;
    private String date;
    private String title;
    private String details;
    private String priority;
    private String status;

    public ToDoModel(int id, String date, String title, String details, String priority, String status) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.details = details;
        this.priority = priority;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ToDoModel toDoModel = (ToDoModel) o;
        return id == toDoModel.id && Objects.equals(date, toDoModel.date) && Objects.equals(title, toDoModel.title) && Objects.equals(details, toDoModel.details) && Objects.equals(priority, toDoModel.priority) && Objects.equals(status, toDoModel.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, title, details, priority, status);
    }

    @Override
    public String toString() {
        return "TodoModel{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", title='" + title + '\'' +
                ", details='" + details + '\'' +
                ", priority='" + priority + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
