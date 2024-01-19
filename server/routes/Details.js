const express = require("express");
const { infoRoute } = require("../controllers/InfoCtrl");
const router = express.Router();

router.post("/details", infoRoute)

module.exports = router;