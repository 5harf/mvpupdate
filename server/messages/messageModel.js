var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
 message: Array,
 createdAt: Number
});

module.exports = mongoose.model('Message', MessageSchema);
