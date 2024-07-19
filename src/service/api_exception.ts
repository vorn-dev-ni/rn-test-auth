export class ApiException extends Error {
  public readonly statusCode: number;
  public readonly data: any;

  constructor(statusCode: number, message: string, data?: any) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
  }
}


export class UnauthorizedException extends ApiException {
  constructor(data?: any) {
    super(401, 'Unauthorized', data);
  }
}

export class ForbiddenException extends ApiException {
  constructor(data?: any) {
    super(403, 'Forbidden', data);
  }
}

export class NotFoundException extends ApiException {
  constructor(data?: any) {
    super(404, 'Not Found', data);
  }
}

export class InternalServerErrorException extends ApiException {
  constructor(data?: any) {
    super(500, 'Internal Server Error', data);
  }
}