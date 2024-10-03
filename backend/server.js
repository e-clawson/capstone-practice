//import express
import express from "express";
//import cors
import cors from 'cors';

import "dotenv/config";

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

//add the port 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
