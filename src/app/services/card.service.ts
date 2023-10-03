import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../utils/enviroment';
@Injectable({
	providedIn: 'root',
})
export class CardService {
	constructor(private http: HttpClient, private loginService: LoginService) {}

	fetchCards(): Observable<any> {
		let userCredential = this.loginService.obterCredencial();
		return this.http.get(
			`${environment.BASE_URL}/cards/client/${userCredential}`
		);
	}
}
