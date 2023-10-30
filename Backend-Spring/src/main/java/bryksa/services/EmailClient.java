package bryksa.services;

import bryksa.models.TaskModel;
import bryksa.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@EnableScheduling
@Service
public class EmailClient {

    private final JavaMailSender javaMailSender;
    private final TasksRepository tasksRepository;

    @Autowired
    public EmailClient(JavaMailSender javaMailSender, TasksRepository tasksRepository, TasksService tasksService) {
        this.javaMailSender = javaMailSender;
        this.tasksRepository = tasksRepository;
    }

    @Scheduled(cron = "0 15 7 * * MON-FRI")
    public void emailSender() {
        List<TaskModel> allTasks = tasksRepository.findAll();
        List<String> titlesList = new ArrayList<>();
        for(TaskModel actualTask : allTasks){
            String title = actualTask.getTitle();
            titlesList.add(title);
        }
        String formattedList = String.join("\n", titlesList);

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("to-do@list.com");

        // Change your email
        simpleMailMessage.setTo("your-email@gmail.com");

        simpleMailMessage.setSubject(String.valueOf( allTasks.get(0).getDate()));
        simpleMailMessage.setText(formattedList);
        System.out.println("Email sent");
        javaMailSender.send(simpleMailMessage);
    }
}
