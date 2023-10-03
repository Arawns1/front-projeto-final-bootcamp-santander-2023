import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/accountModel';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'balance-card',
	templateUrl: './balance-card.component.html',
	styleUrls: ['./balance-card.component.css'],
})
export class BalanceCardComponent {
	account: Account = new Account();

	constructor(
		private accountService: AccountService,
		private router: Router,
		private loginService: LoginService
	) {}

	ngOnInit() {
		this.accountService.fetchAccount().subscribe({
			next: (data: Account) => {
				this.account = new Account(
					data.agency,
					data.number,
					data.balance,
					data.limit,
					data.name
				);
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
}
