const express = require("express");
const ceo = require("../controller/CeoController");
const router = express.Router();

router.get(`/`, ceo);

module.exports = router;
