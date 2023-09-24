# Use an official OpenJDK 11 runtime as a parent image
FROM openjdk:11-jre-slim as build

# Set the working directory in the container
WORKDIR /app

# Copy your application source code (without the build/ directory) into the container
COPY src /app/src

# Copy your build.gradle or build.gradle.kts file
COPY build.gradle /app/build.gradle

# Copy the Gradle Wrapper files
COPY gradlew /app/gradlew
COPY gradle /app/gradle

# Make the Gradle Wrapper executable
RUN chmod +x /app/gradlew

# Install any required packages, including the Java compiler
RUN apt-get update && apt-get install -y openjdk-11-jdk

# Build your application
RUN ./gradlew build

# Create a new stage
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file built in the previous stage to this stage
COPY --from=build /app/build/libs/defever-0.0.1-SNAPSHOT.jar app.jar

# Run the JAR file
CMD ["java", "-jar", "app.jar"]
