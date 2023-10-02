import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginData } from '../model/loginDataModel';
import jwt_decode from 'jwt-decode';
import { environment } from '../utils/enviroment';
@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}
	token: string = '';

	fetchLogin(data: loginData): Observable<any> {
		return this.http.post(`${environment.BASE_URL}/auth/login`, data);
	}

	autorizar(data: any, remember: boolean = false) {
		remember
			? localStorage.setItem('userToken', data.token)
			: sessionStorage.setItem('userToken', data.token);
	}

	deslogar() {
		localStorage.removeItem('userToken');
	}
	obterLoginStatus = () =>
		!!localStorage.getItem('userToken') ||
		!!sessionStorage.getItem('userToken');

	getToken = () => {
		return (
			localStorage.getItem('userToken') || sessionStorage.getItem('userToken')
		);
	};

	obterCredencial = () => {
		let token =
			localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
		if (token) {
			let decode: any = jwt_decode(token);
			return decode.sub;
		} else {
			console.error('Token não encontrado');
		}
	};
}
