require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load Resume Data
const resumePath = path.join(__dirname, "../public/resume.json");
let resumeContent = {};
try {
  resumeContent = JSON.parse(fs.readFileSync(resumePath, "utf-8"));
} catch (error) {
  console.error("Error reading resume.json:", error);
}

// API Route for Chatbot
app.post("/api/chatbot", async (req, res) => {
  const { user_query } = req.body;
  if (!user_query) {
    return res.status(400).json({ error: "User query is required" });
  }

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant", // Ensure the model name is correct
        messages: [
          { role: "system", content: "You are a resume assistant chatbot. Answer queries based on the given resume details." },
          { role: "user", content: `Resume: ${JSON.stringify(resumeContent)}\n\nQuery: ${user_query}` },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching chatbot response:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch chatbot response" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
