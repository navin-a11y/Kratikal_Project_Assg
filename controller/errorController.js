const appError = require('./../utils/appError');

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }
    // programming or other unknown error; don't leak error details
    else {
        //log error
        console.log("Error!!", err);
        //send a generic error
        res.status(500).json({
            status: err,
            message: "something went wrong",
        });
    }
};

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
        sendErrorDev(err, res);
    }
    else if (process.env.NODE_ENV === "production") {
        let error = { ...err };
        if (err.code == 11000) {
            err = duplicateError(err);
        }
        sendErrorProd(err, res);
    }
};

function duplicateError(err) {
    return next(new appError(`${err.keyValue.email} already exists`, 400));
}