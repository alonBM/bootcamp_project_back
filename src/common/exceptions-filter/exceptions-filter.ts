import { Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    Logger.error('Exception thrown: ', exception);

    const response = host.switchToHttp().getResponse();

    const message =
      exception instanceof Error ? exception.message : exception.message.error;

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception.status === HttpStatus.BAD_GATEWAY) {
      status = HttpStatus.BAD_GATEWAY;
    }
    if (exception.status === HttpStatus.BAD_REQUEST) {
      status = HttpStatus.BAD_REQUEST;
    }
    if (exception.status === HttpStatus.CONFLICT) {
      status = HttpStatus.CONFLICT;
    }
    if (exception.status === HttpStatus.EXPECTATION_FAILED) {
      status = HttpStatus.EXPECTATION_FAILED;
    }
    if (exception.status === HttpStatus.FORBIDDEN) {
      status = HttpStatus.FORBIDDEN;
    }
    if (exception.status === HttpStatus.NOT_ACCEPTABLE) {
      status = HttpStatus.NOT_ACCEPTABLE;
    }
    if (exception.status === HttpStatus.NOT_FOUND) {
      status = HttpStatus.NOT_FOUND;
    }
    if (exception.status === HttpStatus.REQUEST_TIMEOUT) {
      status = HttpStatus.REQUEST_TIMEOUT;
    }
    if (exception.status === HttpStatus.SERVICE_UNAVAILABLE) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
    }
    if (exception.status === HttpStatus.UNAUTHORIZED) {
      status = HttpStatus.UNAUTHORIZED;
    }

    response.status(status).json({
      status,
      success: false,
      error: message,
      message: 'Something went wrong'
    });
  }
}
