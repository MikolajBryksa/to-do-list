package com.example.demo.controllers;

import com.example.demo.models.ToDoModel;
import com.example.demo.services.ToDoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ToDoController {

    private ToDoService toDoService;

    public ToDoController(){
        this.toDoService = new ToDoService();
    }

    @GetMapping(value="/todo")
    public List<ToDoModel> getAllItems() {
        return toDoService.getAllItems();
    }

}
