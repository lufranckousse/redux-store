require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://lufranckousse:reacttask@cluster0.k0cfidq.mongodb.net/mern-shopping?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
