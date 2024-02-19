class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        error = [],
        stact = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.error = error;

        if(stact){
            this.stack = stact;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };