//bring in mongoose for structuring data and validation
import mongoose from "mongoose";

//this tkes an object that represents the fields and values of our documents
const todoSchema = mongoose.Schema({
    text: { type: String }, 
    completed: { type: Boolean, default: false },
})
