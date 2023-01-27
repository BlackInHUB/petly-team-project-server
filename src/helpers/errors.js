class BaseError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    };
};

class UnauthorizedError extends BaseError {
    constructor(message) {
        super(message);
        this.status = 401;
    };
};

class ForbiddenError extends BaseError {
    constructor(message) {
        super(message);
        this.status = 403;
    };
}

class NotFoundError extends BaseError {
    constructor(message) {
        super(message);
        this.status = 404;
    };
}

class ConflictError extends BaseError {
    constructor(message) {
        super(message);
        this.status = 409;
    };
};

module.exports = {
    BaseError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError
};
