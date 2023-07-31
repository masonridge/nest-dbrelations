import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  logger = new Logger(LoggingInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before....');
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    console.log(`Method: ${method}, URL: ${url}`);
    const now = Date.now();
    return next.handle().pipe(
      map((data) => {
        console.log(
          `${method} ${url} ${Date.now() - now}ms`,
          context.getClass().name,
        );
        console.log('After....');
        return data;
      }),
    );

    return next.handle();
  }
}
