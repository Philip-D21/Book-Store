const express = require("express");
const router  = express.Router();

const {
    getAllBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
} = require("../controller/bookController");


router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getSingleBook);
router.put("/:id",updateBook);
router.delete("/:id", deleteBook);


module.exports = router;
