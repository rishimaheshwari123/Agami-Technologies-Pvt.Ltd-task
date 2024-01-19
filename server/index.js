const express = require("express")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors')
// config 
dotenv.config();

// rest object  
const app = express();

connectDB();

// middleware 
app.use(express.json());
app.use(cors())

// route 
app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/info", require("./routes/Details"))
app.use("/api/v1/admin", require("./routes/adminRoute"))


// port 
const PORT = process.env.PORT || 8080

// listen 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})