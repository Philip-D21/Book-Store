const db = require("../model")

const BookModel = db.Books



async function getAllBooks (req,res,next){
    try{
        const books = await BookModel.findAll()
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

async function getBookById(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id)
        res.json(book)
    } catch (err) {
        next(err)
    }
}

async function addBook(req, res, next) {
    let bookInfo = req.body;
    try {
        const book = await Book.create(bookInfo);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }

}

async function updateBook(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

async function deleteBook(req, res, next) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        next(error);
    }
}





module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}