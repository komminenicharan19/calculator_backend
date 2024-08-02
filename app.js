const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { evaluate } = require('mathjs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Calculator Backend is running');
});

app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  try {
    const result = evaluate(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid Expression' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
