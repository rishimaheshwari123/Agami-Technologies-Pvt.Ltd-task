const infoModel = require("../models/inforModel")
const infoRoute = async (req, res) => {
    try {
        const { name, id, message, date, time } = req.body;


        const info = await infoModel.create({ name, id, message, date, time })
        res.status(201).send({ success: true, message: "message send successfully" })
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in info" })

    }
}


module.exports = { infoRoute }