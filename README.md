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
VERY IMORTANT - make sure this is secure - put in a .env file to do this 
- run 'npm install dotenv'
- got to server.js and import 'dotenv/config'
- make a .env file 
- add that .env into .gitignore
- add Mongo_URL = and paste your connection link here 
- add your password and add database name after mongodb.net after the / and before the ? 
- add process.env.MONGO_URL into the connection function 
- go to server.js - import connection function (line 8)
- call the connection function - we did in port (second to last line)  

--

we've made a connection to the db so we can save data to our db 
we need to determine what those documents look like - what kind of data are we saving - what fields and values will they have 

mongoose will help us with this through the use of models and schemas 

--

backend 
- create a models folder in backend 
- inside models folder create a todoModel.js
- in that file, import mongoose from mongoose 
- create the schema 

in serve.js
- import to server.js 
- make a new route that get all todos 
- test the route using reqbin, etc. 

now go back to frontend 
- change fetch request to new path 
- check to see that our empty array comes back 
- bring in a state variable to store the todos array 

now we have the READ from CRUD in our app, nead to work on create, update, and delete 

(can do either from the frontend first or the backend first, we will fo backend first, testing routes and ensuring they work and then go to frontend)

backend 
- in server.js, setup post request, and test post request route in reqbin/postman etc
- add middleware to handle requests app.use(express.json())

front end 
- go to app.jsx and map the todos to render the list 
- now start creating a form to add them from the frontend ui 
- create a state for the input, and a handle change function to help manage the state and the change 

work on a delete route 
- go to backend 

work on edit route (PUT) 

# Deployment - backend

we will be using something called render - will help us deploy backend and a bit of front end - back end as a service we can use render for both 

(netlify allows you to deploy the front end but not the back end) 
 - create a free plan 
 - click on new web service 
 (will use your github repo to deploy)
 - click public git repo - put link to your project there 
 - configure page - (maybe make backend in title so you know what it is for )
    - root directory - important for us - (one repo with two subfolders - one for backend and noe for frontend - if were deploying this webservice that will be oir backend - need to direct them to the backend - put whatever the subfolder is called - in this case it in backend)
    - build command is 'npm install' - just like we do to start our backend - this will find the package.json in the backend and find and install the dependencies 
    - the start command should be 'node server' (in development it is nodemon - nodemon restarts the server)
- set the environment variables (using github to build the project but github doesnt have the env variables)

then hit deploy
(cuz we're using a free tier it will "spin down between requests - it will take some time to render/be slower  - but its free so it is what it is)

# Deployment - frontend

(before we deploy we might need to make some changes - the base URL is now different) 
- could deploy our frontend somewhere else but because we're already in render, we wil use that too 
- click on new - and choose static site 
- add a link to your repo -  add frontend to name so you know this is for the front end (make frontend the root)
- in frontend make build command - 'npm install; npm run build'
- publish directory - called dist (vite specific)
- add env variables - base url for backend - the production api that we just created's link 
- then click deploy 

once it is deployed you will have a link to see the live site! 

to keep in mind - mongodb api adresses that are whitelisted - sometimes they are set to allow access from anywhere - if you specify and ip address it needs to be shared with the deployment 

any time you make changes - by default it is configured to that if you push a commit r update it will re-deploy with the updated code - might need to do the configure step though 

redirect/rewrite rules - add - this is the one that renders your project the source file 
- destination is /index.html 
- source /* (wildcard)
- action can change to rewrite 
for more infor about this check out this page (https://docs.render.com/deploy-create-react-app#using-client-side-routing)
- this is for client-side routing 

with netlify you do something similar 