import { LoginService } from './login.service';
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private loginService: LoginService) {}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (req.url.endsWith('/auth/login')) {
			return next.handle(req);
		}

		req = req.clone({
			setHeaders: {
				'Content-Type': 'application/json; charset=utf-8',
				Accept: 'application/json',
				Authorization: `Bearer ${this.loginService.getToken()}`,
			},
		});

		return next.handle(req);
	}
}
