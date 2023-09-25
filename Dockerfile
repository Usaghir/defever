# Build stage
FROM gradle:6.9.1-jdk11 AS build
WORKDIR /home/gradle/project
COPY . .
RUN gradle build -x test

# Production stage
FROM openjdk:11-jdk-slim
COPY --from=build /home/gradle/project/build/libs/defever-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]