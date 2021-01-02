const express = require('express');
const app = express();

const mongoose = require('mongoose');
const doctor = require('./routes/core/doctor');
const user = require('./routes/core/user');
const auth = require('./routes/core/auth');
const files = require('./routes/core/files');


const env = require('dotenv');
env.config();

app.use(express.json());

mongoose.connect(process.env.mongoose_connection, { useNewUrlParser: true, useUnifiedTopology: true },
    success => {
        console.log('Database connection successful');
    },
    err => {
        console.log(err);
    });

const port = process.env.PORT;
app.listen(port, () => {
    console.log('application started in port ', port)
});

app.use('/', (req, res) => {
    return res.json({ message: new Date() });
});
app.use('/doctor', doctor);
app.use('/auth', auth);
app.use('/user', user);
app.use('/files', files);

module.exports = app