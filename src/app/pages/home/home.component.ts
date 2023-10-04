import { MatDialog } from '@angular/material/dialog';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	isFetchCompleted: boolean = false;

	constructor(
		private accountService: AccountService,
		private router: Router,
		private loginService: LoginService,
		public sideNavService: SidenavService
	) {}

	ngOnInit() {
		this.isFetchCompleted = false;
		this.sideNavService.opened = false;
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
		setTimeout(() => {
			this.isFetchCompleted = true;
		}, 2500);
	}

	getAccount() {
		return this.accountService.getAccount();
	}
}
