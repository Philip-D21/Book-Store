const express = require("express");
const router  = express.Router();

const {
    getAllBooks 
} = require("../controller/bookController");


router.get("/", getAllBooks);



module.exports = router;
