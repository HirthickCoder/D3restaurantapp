// Azure Functions API entry point
import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for production
app.use(cors({
  origin: ['http://localhost:5173', 'https://d3projectrestaurants-hcaghae6d2budng.southeastasia-01.azurewebsites.net'],
  credentials: true
}));

app.use(express.json());

// API routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Add your other API routes here
// app.get('/api/menu', (req, res) => { ... });
// app.post('/api/orders', (req, res) => { ... });

export default app;
