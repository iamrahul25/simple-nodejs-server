const express = require('express');
const app = express();
const port = 5000;

app.get('/health', (req, res) => {
  res.send(`Server is Running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
