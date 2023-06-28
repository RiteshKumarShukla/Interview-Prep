const express = require("express");
const app = express();

// Custom logger middleware
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Middleware registration
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  res.send("List of users");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
