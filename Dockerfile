# Build stage
FROM gradle:6.9.1-jdk11 AS build

# Set the working directory
WORKDIR /home/gradle/project

# Copy your Gradle project files into the container
COPY build.gradle /home/gradle/project/
COPY src /home/gradle/project/src

# Build your application, excluding tests
RUN gradle build -x test

# Production stage
FROM openjdk:11-jdk-slim
WORKDIR /app

# Copy the compiled JAR file from the build stage
COPY --from=build /home/gradle/project/build/libs/*.jar /app/app.jar

# Expose the port your Spring Boot application will run on
EXPOSE 8080

# Define the command to run your Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
