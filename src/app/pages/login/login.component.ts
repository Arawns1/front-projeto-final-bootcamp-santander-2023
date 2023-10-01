import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { loginData } from '../../model/loginDataModel';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	isCredentialInvalid: boolean = false;

	loginForm = this.formBuilder.group({
		login: '',
		password: '',
	});

	constructor(
		private loginService: LoginService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	onSubmit(): void {
		let data: any = this.loginForm.value;
		data.login && data.password
			? this.loginService.fetchLogin(data).subscribe((data) => {
					if (data.token != null && data.token != undefined) {
						this.loginService.autorizar(data.token);
						this.router.navigate(['/home']);
					} else {
						this.isCredentialInvalid = true;
					}
			  })
			: (this.isCredentialInvalid = true);
	}
}
