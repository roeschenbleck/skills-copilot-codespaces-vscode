// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const commentsFilePath = path.join(__dirname, 'comments.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load comments from file
function loadComments() {
    if (fs.existsSync(commentsFilePath)) {
        const data = fs.readFileSync(commentsFilePath);
        return JSON.parse(data);
    }
    return [];
}