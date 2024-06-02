const express = require('express');

const app = express();

app.get('/health-check', (req, rest) => {
  rest.send({ hi: 'there' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
