const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection successfully")
    } catch (error) {
        console.log("connection faild")
    }

}

module.exports = connectDB;