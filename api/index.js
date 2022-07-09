const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

const { Auth, Users, Movies, Lists } = require('./routes');

const { MONGODB_URL } = process.env;

async function dbConnect() {
    await mongoose.connect(MONGODB_URL);
}

dbConnect().then(() => console.log("success")).catch(err => console.log(err));

app.use(express.json());
app.use('/api/auth', Auth);
app.use('/api/users', Users);
app.use('/api/movie', Movies);
app.use('/api/lists', Lists);

app.listen(8800, () => {
    console.log('connected');
});