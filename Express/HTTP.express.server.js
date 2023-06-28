// Set up an express server that can handle HTTP GET requests to the '/old-url' path and redirect them to the 'new-url' path. The server must also  handle HTTP GET requests to the '/new-url' path and send a Response with message 'This is new URL'.


const express = require('express');
const app = express();
const port = 3000;

app.get('/old-url', (req, res) => {
    res.redirect('/new-url');
});

app.get('/new-url', (req, res) => {
    res.send('This is the new URL');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
