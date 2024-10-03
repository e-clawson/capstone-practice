# capstone-practice


# steps 

Setup environment
 - open up terminal 
 - cd into whatever folder you would like to save project on locally 
 - crate project file 'mkdir my-project-name'
 - cd into new project file 
 - create frontend - 'npm create vite@latest' - add frontend name, choose react, choose javascript 
 - cd into frontend project 
 - run 'npm install' 
 - cd into main project folder 
 - make a backend folder 'mkdir backend'
 - cd into backend folder 
 - run command 'npm init -y'
 - cd to main project folder 

setup github repo 
- go to your github
- click the + to make a new repo (give it the same name for consistency)
- go through the steps on the screen 
- refresh the page and check that it committed and everything is there 

now we have the project setup 

backend 
- go to server.js file in backend and make an express server 
- (go to package.json change the type to mpodule - ES6 modules )
- cd to backend folder and run 'npm install express'
- (pro-tip don't push the mode modules folder)
- create git ignore for backend
- 

- import express from express 
- create our express app 
- make any route to test 
- listen for a specific port 
- to run the port run the code 'nodemon' in terminal 
- check that the port and route are working 

frontend 
- update app.jsx
- import useEffect - to help us get data when the page loads 
- add to app function - takes two things 
- make a fetch request in the useEffect function - do an async function for the fetch 
- open a new terminal for the frontend -  cd to the frontend 
- run 'npm run dev' in frontend 
- check that the frontend loaded (check error messages to see if it fetched properly )
(cors error - security behavior is to block something coming from a different place - server might need to allow access from a different source or origin - this happens often - how to fix - could add an IIFEE function - other option - need to go to backend and enable this)

backend 
- go to backend - stop the server - there is a library to install to help with this - install cors 
- run 'npm i cors' (make sure ypur terminal is in the backend)
- import cors to server.js (line 4)
- establish cors as middleware (line 11)

- run the frontend in the browser - inspect the browser and check to see that the backend console.log is appearing 

If it is - then you have a setup frontend and backend and they are successfully communicating 

backend - 
- make config.js file 
- going to use mongoose to help us communicate - install mongoose by using the following command in the terminal (make sure terminal is cd into backend) = 'npm i mongoose'
- in config file - import mongoose from mongoose 
- make async function to connect to the db (async gives you more control over when it happens )
- for this connection you need your mongodb driver URL - log in to mongodb(online) - go to connect go to drivers and grab the link 
VERY IMORTANT - make sure this is securte - put in a .env file to do this 
- run 'npm install dotenv'
- got to server.js and import 'dotenv/config'
- make a .env file 
- add that .env into .gitignore
- add Mongo_URL = and paste your connection link here 
- add your password and add database name after mongodb.net after the / and before the ? 
- 