import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { environment } from '../utils/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/accountModel';
@Injectable({
	providedIn: 'root',
})
export class AccountService {
	account: Account = new Account();
	constructor(private http: HttpClient, private loginService: LoginService) {}

	fetchAccount(): Observable<any> {
		let userCredential = this.loginService.obterCredencial();

		return this.http.get(
			`${environment.BASE_URL}/accounts/client/${userCredential}`
		);
	}

	setAccount(data: any) {
		this.account = new Account(
			data.agency,
			data.number,
			data.balance,
			data.limit,
			data.client.name
		);
	}
}
