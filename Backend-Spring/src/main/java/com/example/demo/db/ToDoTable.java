package com.example.demo.db;

import com.example.demo.models.ToDoModel;

import java.util.List;

public class ToDoTable {
    private List<ToDoModel> newList;

    public ToDoTable(){
        this.newList = List.of(
                new ToDoModel(1, "monday", "zaparz herbate", "wstaw wode", "niepilne", "undone"),
                new ToDoModel(2, "tuesday", "uruchom laptop", "wcisnij guzik", "niepilne", "undone"),
                new ToDoModel(3, "wednesday", "zjedz lunch", "idz do jadalni", "niepilne", "undone")
        );
    }

    public List<ToDoModel> getAllToDoos(){
        return newList;
    }

}
