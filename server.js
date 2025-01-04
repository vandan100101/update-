const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;
const QUESTIONS_FILE = "questions.json";

app.use(cors());
app.use(bodyParser.json());

// Load questions
app.get("/questions", (req, res) => {
  fs.readFile(QUESTIONS_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read questions file" });
    }
    res.json(JSON.parse(data));
  });
});

// Save questions
app.post("/questions", (req, res) => {
  const questions = req.body;

  fs.writeFile(QUESTIONS_FILE, JSON.stringify(questions, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Unable to save questions file" });
    }
    res.json({ message: "Questions saved successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
