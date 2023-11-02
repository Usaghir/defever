# Stage 1: Build the application
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Create the final image
FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/defever-2.0.1-SNAPSHOT.jar defever.jar
COPY src/main/resources/keystore.p12 /keystore.p12
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "defever.jar"]