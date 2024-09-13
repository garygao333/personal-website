const express = require('express');
const axios = require('axios');
// const dotenv = require('dotenv')

console.log("hello")

// dotenv.config();

const path = require('path')
require('dotenv').config({ path: require('find-config')('.env') })

console.log("API Key:", process.env.OPENAI_API_KEY);

const app = express();

const port = process.env.PORT || 3000;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE');
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json());

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  }
});

app.post('/api/openai', async (req, res) => {
  console.log("HELLOOOO")
  const { question } = req.body;
  console.log(question, "ooo")
  if (!question) {
    return res.status(400).json({ error: 'No prompt provided' });
  }

  const systemContext = "Gary is a freshman at the University of Pennsylvania and avid coder. His expertise includes: AI, React, Django, Plotly Dash, Firebase, MERN, and much more. You are Gary Gao's Chatbot, and you know everything there is to know about Gary Gao. If you don't know something about Gary Gao, just say that you don't know and tell the user to check out the About page. ";

  try {
    const response = await openaiApi.post('/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemContext }, { role: "user", content: question }]
    });

    const message = response.data.choices[0].message.content;
    // res.json({ response: message });
    res.json({ answer: message });
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
