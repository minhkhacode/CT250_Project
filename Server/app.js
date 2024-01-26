const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

debugger

app.get("/", (req, res) => {
    res.json({ message: "Xin chào bạn đến với cửa hàng"});
});

module.exports = app;