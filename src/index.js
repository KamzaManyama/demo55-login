const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const login = require('./login');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Serve frontend HTML page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../newLogin.html')); // adjust path if needed
// });

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const result = login(username, password);
  res.json(result);
});

// Start server
const PORT = 3022;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
