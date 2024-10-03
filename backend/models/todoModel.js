//bring in mongoose for structuring data and validation
import mongoose from "mongoose";

//this tkes an object that represents the fields and values of our documents
const todoSchema = mongoose.Schema({
    //field must be a string( data validation)
    text: { type: String }, 
    //field must be a boolean, and the default value will be false 
    completed: { type: Boolean, default: false },
})

//create our model using the schema 
//gets the name of the collection it is part of, and 
//mention the schema as well
const Todo = mongoose.model('todos', todoSchema)

//need to import the model to the server to interact with todo documents
export default Todo