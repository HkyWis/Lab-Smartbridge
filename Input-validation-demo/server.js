const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/auth.route"));

// Root
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
