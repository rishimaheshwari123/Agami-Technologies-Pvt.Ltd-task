const express = require("express");
const { getAllEmp } = require("../controllers/adminCtrl");
const router = express.Router();

router.get("/get-all", getAllEmp)


module.exports = router;