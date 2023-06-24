const express = require("express");
const app = express();

// Custom validator middleware
const validator = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Additional validation logic...

  next();
};

// Middleware registration
app.use(express.json());
app.use(validator);

// Routes
app.post("/users", (req, res) => {
  // Process user registration
  res.send("User registered successfully");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
