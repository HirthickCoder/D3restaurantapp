const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS for all origins in production
app.use(cors({
  origin: '*',
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// API routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static files from dist directory
app.use(express.static('dist'));

// Handle React Router - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
