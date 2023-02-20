package com.example.demo.services;

import com.example.demo.db.ToDoTable;
import com.example.demo.models.ToDoModel;

import java.util.List;

public class ToDoService {

    private ToDoTable toDoTable;

    public ToDoService(){
        this.toDoTable = new ToDoTable();
    }

    public List<ToDoModel> getAllItems(){
        return toDoTable.getAllToDoos();
    }
}
