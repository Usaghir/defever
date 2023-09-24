# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim as build

# Set the working directory in the container
WORKDIR /app

# Copy your application source code (without the build/ directory) into the container
COPY src /app/src

# Copy your build.gradle or build.gradle.kts file
COPY build.gradle /app/build.gradle

# Copy the Gradle Wrapper files into the container
COPY gradle /app/gradle
COPY gradlew /app/gradlew
COPY gradlew.bat /app/gradlew.bat

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
