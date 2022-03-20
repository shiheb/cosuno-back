const express = require("express");
const router = express.Router();
const data = require("./../data.json");
router.get("/companies", (req, res) => {
  const str = data.companies;
  res.end(JSON.stringify(str));
});
router.get("/specialties", (req, res) => {
  const str = data.specialties;
  res.end(JSON.stringify(str));
});
router.post("/addCompany", (req, res) => {
  res.end("NA");
});

module.exports = router;
