const express = require('express');
const cors = require('cors');
const { usersRouter } = require('./app/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});

debugger;

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Xin chào bạn đến với cửa hàng');
});

module.exports = app;
