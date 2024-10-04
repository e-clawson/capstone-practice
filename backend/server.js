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

//config middleware - data from client stored in request.body 
//and formatted as json - important middleware for post and put requests  
app.use(express.json())

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

//route that creates and adds a todo document to the database 
app.post('/todos', async (req,res) =>{
    try {
        console.log(req.body)
        const newToDo = await Todo.create(req.body)
        console.log("POST /todos")
        res.status(201).json(newToDo)
     } catch(e) {
        console.log(e)
        res.status(400).json(e)

     }
})

// route for deleting a documentfrom the database 
app.delete("/todos/:id", async (req,res) => {
    try {
        //use id from params to find and delete the document 
        const deletedToDo = await Todo.findByIdAndDelete(req.params.id)
        console.log(deletedToDo)
        console.log("DELETE /todos/:id")
        res.status(200).json(deletedToDo)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
}) //id helps us find the specific document to delete 

app.put("/todos/:id", async (req,res) => {
    try{
        const editedToDo = await Todo.findByIdAndUpdate(req.params.id, req.body)
        console.log(editedToDo)
        console.log("PUT /todos/:id")
        res.status(200).json(editedToDo)
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
