class BaseError extends Error {
  public readonly name: string;
  public readonly status: number;
  public readonly message: string;

  constructor(name: string, status: number, message: string) {
    super(message);
    this.name = name;
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this);
  }
}

export class APIError extends BaseError {
  constructor(message = 'API Error') {
    super('API Internal Server Error', 500, message);
  }
}

export class ValidationError extends BaseError {}

export class AuthorizationError extends BaseError {}

export class NotFoundError extends BaseError {}
