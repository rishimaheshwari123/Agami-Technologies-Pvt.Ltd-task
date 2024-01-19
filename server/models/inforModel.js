const mongoose = require("mongoose")

const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },

})

module.exports = mongoose.model('Info', infoSchema);