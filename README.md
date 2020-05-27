# DeFever

## Introduction

DeFever is a forum application where the user can get all the latest information regarding COVID-19. After logging in, the application offers the following features:

- Home: Here the user can get all the latest news and data regarding COVID-19, including up to date information on the number of COVID related casualties per region in Sweden.
- Posts: This is the page where a user can post or comment whatever is in their minds regarding the current situation. The user can also see the most popular posts and comments made by other users and interact with them by liking, unliking or commenting in them.
- Chatpage: This page offers a more direct, rapid messaging option to users. The user can quickly interact with other users who happen to be online, and ask whatever question or thought they have in their mind.
- Profile: In this page the user can update his or her username and password. 

## Use Case Diagram

![](https://www.plantuml.com/plantuml/img/ZLHDRzim3BthL_2u7PnXnmr1q216WG4T1hHexupDsaHaoP3ePC6s_pxQTTocjHFxO0XyZuyKFtGJ1OCqbJN6qhE0U0XSb08v1yg4lJF2OWbIkgKzXNLTGmAFaM23-aiPYu2LYJjsDUe9QinsMD237DMfbK1NM3AOYG-jN-YFAGfkLS8CdBSX_XZGxzETBzZ15xYdWgDG-FnYVgB0pqVO1Ch92QEDFR3ECefHXHnJtjlk2NEmA1G5Dh-UVgJ9rs-GQ_GUltk171rEAezr8ZvH2e5hgYs529h5mw6DTig0wG1eBTG-IjGCCrzLcak4xL5lRMcFBgEU_1Dt1DXHNvcdwAoObgDnbgTPgIhAHrGxiMwaL7VlxB7dRaeKiBmdEB2KuAMa3cT7q6ZzuolF5GIsAt5EWZoKKSlk6utzpvYsOv0aOwtuQ8B5OZNQ7VWEooMxp3OvhLPZdil5udtxEYVwBUHozHaIkT3F2nWi_tQtUDliw_JBap2aD7SQvX9RqM4_XYWJOpHXFzDuNzapRAnVembSdTMhZ77TcTCzapSUOyPMpE1CQeziqhXvehBzmfqEPonpenlGlj3_0G00)

## Activity Diagram

![](https://www.plantuml.com/plantuml/img/dLJ1JiCm3BtdAtmSXsdY29DWqmO22GJYi7lKU6r4cbI9ksb_ZvEEjgFhD95JQpy_Fpjs5e6afxeqGf0cWx36PzoXNrOLJ66PaTvfEi1QozpBKeW45teBapUNvwX0sySRe08jJAox4S37OuMIqcS4liWTWimoLrjgiGSC3JYUU-RITfx-qGJig9Bt2tCT2FqHO9NUzlB0lj2iUxAHHYl8F2gqfAK9d4k7Zchw09nqBfe4ANz39OvwarPNugVCSQYJLKW5gu_DwtfwUvTC5lTXfYJ9XZJ6Vxf0uJn1T6yqxg6Ac956980qfhKaSAypaULTVcDop4JcoXB7sXgnJsL5Xy4DjVcYtjcHvCJ3VPI4QjuQUsrhJUrDjDBUzFNIbePpg0COZb7_a9ZYBWgy75_Rlmp3UjPeaAwlgAR2-VF-orfKoZEefj-CF-fQNsF_7S1L8MbaWAEBcyRBkDTK99jZZ8Swe0-z6VPkonirpc9pxE_Pl1llCojuRifN7GBgIdM3DbPPOsl-JxUUNmvNKs_LVzUSNofN2R7W87xTVW00)

## Technologies used

This full-stack application is based on Spring, PostgreSQL, React, React router and Axios. Check the following links for documentation and guides:

- [Spring](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org)
- [React](https://reactjs.org)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)

## Setup

DeFever consists of three main parts:

1. Database (Postgres).
2. Backend server (Spring).
3. Frontend development server (React).

It is necessary to set up and start these three components in the order above for everything to work.

### Prerequisites

- Install `docker` and `docker-compose`.
- Install `Nodejs`.

### Starting the database

To start the database open the terminal and `cd` your way in to the project root folder. You can just simply run
`docker-compose up` to start the database. Closing the terminal will kill the database. So you need to restart the database every time you need to use it.

### Starting the backend server

Open the root folder and import all the gradle dependencies (this has to be done only once).

Make sure that the database is running (see steps above) otherwise the backend won't have access to it. Then run the main class at `src/main/java/se/kth/sda/defever/DefeverApplication.java` to start the web server.

### Starting the frontend development server

To install the project dependencies for the frontend, open the terminal and make sure that the current directory is `frontend`. You can then run `npm install` to install all the dependencies needed for the project (This has to be done only once).

To start the frontend server run `npm start` from the `frontend` directory. Make sure that database and backend server are also running so that the frontend can interact with the backend.  

## FAQ

### How to connect to running database from terminal

Sometimes you might want to inspect the tables, run raw queries, seed the database, check that a certain backend action has been performed correctly. To do that you can simply run the following command

`docker run -it --network host postgres:11-alpine psql -h localhost -U defever_user -p 5430 -W defever`

Use the password specified in `docker-compose.yaml`.
