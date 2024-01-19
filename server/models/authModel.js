const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Emp', empSchema);