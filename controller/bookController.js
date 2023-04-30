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




module.exports = {
    getAllBooks
}