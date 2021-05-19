require('dotenv/config');

const express = require('express');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'Portfolio';
const capitalized = (string) =>
    string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

// Routes
const index = require('./routes/index');
app.use('/api', index);

// Serve static in production
const path = require('path');
app.use(express.static(path.join(__dirname, '/client/build')));
app.use((req, res) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + '/client/build/index.html');
});

// Error handling
require('./error-handling')(app);

module.exports = app;
