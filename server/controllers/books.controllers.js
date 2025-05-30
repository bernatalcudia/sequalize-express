const Book = require("../models/Book")


const getBooks = async (req, res) => {
    const getBooks = await Book.findAll()
    res.send(getBooks)
}

const createBook = async (req, res) => {
    const createdBook = await Book.create({ title: "Cinco semanas en avion", description: "Hola", length: 350 })
    res.send(createdBook.id)
}

exports.getBooks = getBooks
exports.createBook = createBook