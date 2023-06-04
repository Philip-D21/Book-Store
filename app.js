const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

//routes
const bookRouter = require('./routes/book');
 
//import dotenv and port
require("dotenv").config();
const port = process.env.port||4000


//middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Home route 
app.get("/", (req,res) => {
    res.send("Welcome to the Book API")
});

 // routes middleware
app.use("/book", bookRouter);

//handling error messages
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({
        error:err.message
    })
});

// Basic routes
app.listen(port, (req,res) => {
    console.log(`server listening on port ${port}`);
});