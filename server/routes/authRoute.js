const express = require("express");
const { registerRoute, loginRoute } = require("../controllers/authCtrl");
const router = express.Router();

router.post("/register", registerRoute)
router.post("/login", loginRoute)

module.exports = router;