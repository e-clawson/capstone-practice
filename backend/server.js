//import express
import express from "express";
//import cors
import cors from 'cors';
//allows us to make  our own env variables 
import "dotenv/config";
//import the function to connect to the DB 
import connectDB from "./config.js";
//import todo model 
import Todo from "./models/todoModel.js";

//creat our express application 
const app = express()

//setup a cors middleware - can add some specific things into the () 
//but for now we leave empty 
app.use(cors())

//specify a port
const PORT = 8080

//make any route to test 
app.get('/test', (req, res) => {
    res.json("hello")
})

app.get('/todos', async (req,res) => {
    try{
        //use the fin method to retrieve all todos from the todos collection
       const todos = await Todo.find({})
       console.log('GET /todos') //good to add shows us it made a GET request to this path
       //send those documents to the frontend client 
       res.status(200).json(todos)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//add the port 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})
