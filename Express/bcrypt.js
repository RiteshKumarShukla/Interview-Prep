const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

// Route for registering a user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the username and hashed password in your database
    // (Replace this with your own database logic)

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for authenticating a user
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Retrieve the hashed password from your database based on the username
    // (Replace this with your own database logic)

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (isMatch) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
