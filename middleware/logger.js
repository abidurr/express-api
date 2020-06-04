const moment = require("moment");

const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get("host")}${req.originalUrl} requested on ${moment().format()}`
    );
    next();
};

module.exports = logger;

// paste following code in index.js to initialize logger middleware
// const logger = require("./middleware/logger")
// app.use(logger);