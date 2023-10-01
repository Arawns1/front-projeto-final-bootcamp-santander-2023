import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { loginData } from '../model/loginDataModel';
@Injectable({
	providedIn: 'root',
})
export class LoginService {
	BASE_URL: string = 'http://localhost:8080';
	constructor(private http: HttpClient) {}
	token: string = '';

	fetchLogin(data: loginData): Observable<any> {
		return this.http.post(`${this.BASE_URL}/auth/login`, data);
	}

	autorizar(data: any) {
		localStorage.setItem('userToken', data.token);
	}
	deslogar() {
		localStorage.removeItem('userToken');
	}
	obterLoginStatus = () => !!localStorage.getItem('userToken');
}
