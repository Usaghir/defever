
# Build stage
FROM gradle:6.9.1-jdk11 AS build
WORKDIR /home/gradle/project

# Copy your Gradle project files into the container
COPY build.gradle settings.gradle /home/gradle/project/
COPY src /home/gradle/project/src/

# Build your application, excluding tests
RUN gradle build -x test

# Production stage
FROM openjdk:11-jdk-slim
WORKDIR /app

# Copy the compiled JAR file from the build stage
COPY --from=build /home/gradle/project/build/libs/defever-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port your Spring Boot application will run on
EXPOSE 8080

# Define the command to run your Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]