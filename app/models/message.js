const mongoose = require('mongoose');
const message = new mongoose.Schema({
    id: Date.now,
    from: String,
    to: String,
    message: String,

});
module.exports = mongoose.model('message', message);
