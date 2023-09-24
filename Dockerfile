# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy your application source code and resources
COPY src /app/src
COPY build.gradle /app/build.gradle

# Build your application
RUN ./gradlew build

# Expose the port your Spring Boot application will run on
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "build/libs/defever-0.0.1-SNAPSHOT.jar"]
