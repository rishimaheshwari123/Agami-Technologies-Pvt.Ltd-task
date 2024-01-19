const empModel = require("../models/authModel");
const registerRoute = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(500)
                .send({ success: false, messsage: "Provide all fileds" });
        }

        const user = await empModel.findOne({ email });

        if (user) {
            return res
                .status(500)
                .send({ success: false, messsage: "Employee is already register" });
        }

        const newEmp = await new empModel({ name, email, password }).save();
        res
            .status(201)
            .send({
                success: true,
                newEmp,
                messsage: "Employee register successfully",
            });
    } catch (error) {
        return res
            .status(500)
            .send({ success: false, messsage: "Error in registration" });
        console.log(error);
    }
};


const loginRoute = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emp = await empModel.find({ email });
        if (!emp) {
            return res
                .status(500)
                .send({ success: false, messsage: "user not found" });
        }
        res.status(200).send({
            success: true
            , message: "Employee login successfully"
        })
    } catch (error) {
        return res.status(500).send({ message: 'error in auth' })
    }
}

module.exports = { registerRoute, loginRoute };
