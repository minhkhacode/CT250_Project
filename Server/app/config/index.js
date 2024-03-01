const config = {
    app: {
        port: process.env.PORT || 6868,
    },

    db: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CT449',
    },
};

module.exports = config;
