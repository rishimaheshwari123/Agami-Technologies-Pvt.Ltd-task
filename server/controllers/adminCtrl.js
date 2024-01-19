const infoModel = require("../models/inforModel")
const getAllEmp = async (req, res) => {
    try {
        const allEmp = await infoModel.find();
        if (allEmp.length == 0) {
            return res.status(500).send({ success: false, messsage: "no message found" });
        }
        res.status(200).send({ success: true, allEmp })
    } catch (error) {
        return res.status(500).send({ message: 'error in message' })
    }
}

module.exports = { getAllEmp }