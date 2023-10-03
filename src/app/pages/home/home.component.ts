import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	constructor(
		private accountService: AccountService,
		private router: Router,
		private loginService: LoginService
	) {}

	ngOnInit() {
		this.accountService.fetchAccount().subscribe({
			next: (data) => {
				this.accountService.setAccount(data);
			},
			error: (err) => {
				alert(
					'Não foi possível encontrar a conta no momento. Tente novamente mais tarde'
				);
				this.loginService.deslogar();
				this.router.navigate(['']);
			},
		});
	}

	getAccount() {
		return this.accountService.getAccount();
	}
}
