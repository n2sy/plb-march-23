import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);

    if (request.method != 'GET') {
      let mytoken = localStorage.getItem('mytoken');
      if (mytoken) {
        let cloneRequest = request.clone({
          headers: new HttpHeaders().set('Authorization', `bearer ${mytoken}`),
        });
        return next.handle(cloneRequest);
      } else return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}

export const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AddTokenInterceptor,
  multi: true,
};
