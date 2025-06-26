const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initialize the app
const app = express();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env];

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Database connection error:', err);
    } else {
        console.log(`Connected to Database: ${MONGODB_URI}`);
    }
});

// View engine setup
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', index);
app.use('/image', image);

// Export app for testing
module.exports = app;

// Start server only if not in test mode
const PORT = process.env.PORT || 5000;
if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
}
