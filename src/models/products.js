const mongoose = require('mongoose');

const schema = new mongoose.Schema({
   name: String,
   brand: String,
   price: Number,
});

// MVC - Model View Controller
const Model = mongoose.model('products', schema);

module.exports = Model; 