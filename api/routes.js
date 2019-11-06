const express = require("express");
const router = express.Router();

// TODO 3 GET endpoints for API

router.get(["/faction", "/faction/:search"], (req, res) => {});
router.get(["/article", "/article/:id"], (req, res) => {});
router.get("/map", (req, res) => {});

// TODO 2 POST endpoints for API

router.post("/user", (req, res) => {});
router.post("/article", (req, res) => {});

module.exports = router;
