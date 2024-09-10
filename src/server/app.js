const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// OpenAI API setup
const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  }
});

// Chat route
app.post('/api/openai', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  try {
    const response = await openaiApi.post('/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }]
    });

    const message = response.data.choices[0].message.content;
    // res.json({ response: message });
    res.json({ answer: message });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
