# To-Do List

This **task management tool** allows users to create, edit, and manage to-do tasks.\
The application includes: task prioritization, status tracking and a calendar.

### Tech Stack

- Java with Spring Boot (backend)
- JavaScript with React (frontend)
- Bootstrap (style)
- PostgreSQL (database)

### Setup

1. Backend (Spring Boot):

- Navigate to the Backend-Spring directory:

  ```
      cd Backend-Spring
  ```

- Check Java version in pom.xml file:

  ```
      <java.version>19</java.version>
  ```

- Set database in application.properties file:

  ```
      spring.datasource.username=postgres
      spring.datasource.password=postgres
  ```

- Build and package the Spring Boot application using Maven:

  ```
      ./mvnw clean package
  ```

- Run the Java application using the generated JAR file:

  ```
      java -jar target/demo-0.0.1-SNAPSHOT.jar
  ```

2. Frontend (React):

- Navigate to the Frontend-React directory:

  ```
      cd Frontend-React
  ```

- Install the required npm packages:

  ```
      npm install
  ```

- Start the React application:

  ```
      npm start
  ```

### Preview

![Add task](/Frontend-React/public/screenshots/to-do-list-add-task.png)
![Today's tasks](/Frontend-React/public/screenshots/to-do-list-today.png)
![Calendar](/Frontend-React/public/screenshots/to-do-list-calendar.png)
