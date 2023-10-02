import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	constructor(private accountService: AccountService, private router: Router) {}

	ngOnInit() {
		this.accountService.fetchAccount().subscribe({
			next: (data) => {
				this.accountService.setAccount(data);
			},
			error: (err) => {
				alert(
					'Não foi possível encontrar a conta no momento. Tente novamente mais tarde'
				);
				this.router.navigate(['']);
			},
		});
	}
}
