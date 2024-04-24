const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello course Service');
});

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
