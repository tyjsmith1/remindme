const express = require('express');
const app = express();
const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
    res.send('Hello World from server');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});