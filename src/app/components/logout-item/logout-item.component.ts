import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
	selector: 'logout-item',
	templateUrl: './logout-item.component.html',
	styleUrls: ['./logout-item.component.css'],
})
export class LogoutItemComponent {
	constructor(private LoginService: LoginService, private router: Router) {}

	deslogar() {
		this.LoginService.deslogar();
		this.router.navigate(['']);
	}
}
