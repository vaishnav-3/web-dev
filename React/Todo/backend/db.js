

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vaishnavpatil003:Mongo%400987@cluster0.ne1tiuu.mongodb.net/todos")


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}