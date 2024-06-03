# crambrulee

## Description

This app is intended to be a calendar app that intuitively helps you plan your tasks based on your calendar availability and task urgency.
So far, we have successfully created a Home Page, a Login form, and a Signup form.
We use MongoDB as a database to store information required for user authentication.

Level of Achievement: Project Gemini
Project Scope: To create a Web App that displays Users' personalised calendars, and intuitively suggests timeslots for User to begin working on new tasks, based on factors like task urgency and calendar availability.
Milestone 1 (ideation): Each user must have their own personalised calendar. This calendar must not be accessible by anyone else but the user. As such, it is necessary to build a secure login in and signup process that allows Users to safely store their information.

## Prerequisites

Before you begin, ensure that your machine has the following software and dependencies downloaded

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: npm is installed with Node.js.
- **MongoDB**: Install MongoDB from [mongodb.com](https://www.mongodb.com/). Ensure MongoDB is running on `localhost:27017`.
- **express**: Type into terminal "npm i express"
- **mongoose**: Type into terminal "npm i mongoose"
- **hbs**: Type into terminal "npm i hbs"

## Installation

To set up the project locally, clone the cramBrulee repository into your machine using the gitHub desktop app.
Alternatively, you can enter the following terminal command to clone the repository using Git
"git clone https://github.com/timothyloh0523/crambrulee.git"

## Usage

1. Open Command Prompt or Terminal and navigate to the directiory crambrulee/src
2. Run the application using the following terminal command: node index.js (if successful, terminal should diplay "port connected" and "mongoDB connected")
3. Open a web browser and go to http://localhost:3000. You should see the login page.
4. You will be able to create a new user using the signup form, once a new user has been created you will be directed to the login page. Users will only be permitted to log into the home page after logging in with the correct credentials. Different messages have been implemented to feedback different types of incorrect log in credentials.

## To Do

1. Restrict creation of user with username that has already been taken
2. Using React, build frontend UI of Login and Signup forms, as well as Home Page
3. Build home page that displays weekly forecast, with functions to "block out mornings" (WIP)
4. Build option to switch from weekly forecast to single day forecast and monthly forecast
