# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot JAR file from the project's build directory into the container
COPY build/libs/defever-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port your Spring Boot application will run on
EXPOSE 8080

# Define the command to run your Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]