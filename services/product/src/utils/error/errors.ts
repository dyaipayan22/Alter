import { STATUS_CODES } from './statusCodes';

class BaseError extends Error {
  public readonly name: string;
  public readonly status: number;
  public readonly message: string;

  constructor(name: string, status: number, message: string) {
    super(message);
    this.name = name;
    this.status = status;
    this.message = message;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

export class APIError extends BaseError {
  constructor(message = 'Internal Server Error') {
    super('API Error', STATUS_CODES.INTERNAL_ERROR, message);
  }
}

export class ValidationError extends BaseError {
  constructor(message = 'Bad Request') {
    super('Bad Request', STATUS_CODES.BAD_REQUEST, message);
  }
}

export class AuthorizationError extends BaseError {
  constructor(message = 'Access Denied') {
    super('Unauthorized', STATUS_CODES.UNAUTHORIZED, message);
  }
}

export class NotFoundError extends BaseError {
  constructor(message = 'Not Found') {
    super('Not Found', STATUS_CODES.NOT_FOUND, message);
  }
}
