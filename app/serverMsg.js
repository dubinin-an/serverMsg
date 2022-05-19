const express = require('express');
const bodyParser = require('body-parser');
const config = require('app-config');
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require('mongoose');
const db = require("./db");
const messages = require('./routes/messages')

const app = express();
const port = 4321;
const allowlist = ['localhost:80'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
    if (isDomainAllowed) {
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate));
app.use(helmet());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', (req, res) => res.send('Hello World SGWebFreelancer'));
// Any url that doesn't match will return as a 404
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    res.status(404).send('Service Not Found 404');
    err.status = 404;
    next(err);
});

app.use('/messages', messages)
mongoose.Promise = global.Promise;
mongoose
    .connect(db.url)
    .then(()=> console.log('DB connected successfully.')
).catch(err => console.log('DB connection failed ' + err)
);
const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));
