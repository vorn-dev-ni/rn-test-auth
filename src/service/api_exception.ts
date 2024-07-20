import { ErrorResponse } from "./response";

export class ApiException extends Error {
  statusCode: number;
  data?: ErrorResponse;
  type?:string;

  constructor(statusCode: number, message: string, data?: ErrorResponse ,type?:string ) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
    this.type = type;
  }
}

export class UnauthorizedException extends ApiException {
  constructor(data?: ErrorResponse ) {
    super(401, data?.message || 'Unauthorized', data,data?.code || "Unauthorized");
  }
}

export class ForbiddenException extends ApiException {
  constructor(data?: ErrorResponse ) {
    super(403, data?.message || 'Forbidden', data,data?.code || 'Forbidden');
  }
}

export class NotFoundException extends ApiException {
  constructor(data?: ErrorResponse ) {
    super(404, data?.message || 'Resouces Not Found', data,data?.code || 'Something went wrong');
  }
}

export class InternalServerErrorException extends ApiException {
  constructor(data?: ErrorResponse ) {
    super(500, data?.message || 'Internal Server Error',  data,data?.code || 'Server went down');
  }
}

export class ValidationErrorException extends ApiException {
  constructor(data?: ErrorResponse) {
    const message = data?.data?.map((errorItem: any) => errorItem.msg).join(', ') || 'Validation Error';
    super(422, message, data,'Validation Failed');
  }
}
