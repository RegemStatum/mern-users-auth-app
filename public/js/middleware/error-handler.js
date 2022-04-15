const errorHandlerMiddleware = (error, req, res, next) => {
    const defaultError = {
        status: 500,
        message: "Something went wrong",
    };
    if (error.name === "ValidationError") {
        defaultError.status = 400;
        const errors = Object.keys(error.errors);
        let errorMsg = "";
        errors.forEach((key) => {
            const message = error.errors[key].message;
            errorMsg += " " + message;
        });
        defaultError.message = errorMsg;
    }
    if (error.name === "CastError") {
        defaultError.status = 500;
        defaultError.message = error.message;
    }
    if (error.code && error.code === 11000) {
        defaultError.status = 400;
        defaultError.message = `${Object.keys(error.keyValue)} fields must be unique`;
    }
    if (error.statusCode === 404) {
        defaultError.status = error.statusCode;
        defaultError.message = error.message;
    }
    console.log(error);
    res.status(defaultError.status).json({ message: defaultError.message });
};
export default errorHandlerMiddleware;
