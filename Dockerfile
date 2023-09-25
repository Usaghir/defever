# Build stage
FROM gradle:6.9.1-jdk11 AS build
WORKDIR /home/gradle/project

# Copy your Gradle project files into the container
COPY build.gradle settings.gradle /home/gradle/project/
COPY src /home/gradle/project/src

# Specify the custom build directory
WORKDIR /home/gradle/project/build
RUN gradle build -x test

# Production stage
FROM openjdk:11-jdk-slim
WORKDIR /app

# Copy the JAR file from the custom build directory
COPY --from=build /home/gradle/project/build/libs/defever-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
