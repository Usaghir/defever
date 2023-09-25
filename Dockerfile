# Build stage
FROM gradle:6.9.1-jdk11 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build

# Production stage
FROM openjdk:11-jre-slim
COPY --from=build /home/gradle/src/build/libs/defever-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
