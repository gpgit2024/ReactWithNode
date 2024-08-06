const express = require('express');
const path = require('path');

const app = express();
const port = 5000; // You can choose any port

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
