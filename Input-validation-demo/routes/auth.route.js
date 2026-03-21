const express = require("express");
const router = express.Router();

const validateRegister = require("../middleware/validate");

router.post("/register", validateRegister, (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "User registered successfully",
    data: {
      name,
      email,
    },
  });
});

module.exports = router;
