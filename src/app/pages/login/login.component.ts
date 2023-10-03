import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { loginData } from '../../model/loginDataModel';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	isCredentialInvalid: boolean = false;
	isRememberChecked: boolean = false;

	loginForm = this.formBuilder.group({
		login: '',
		password: '',
	});

	constructor(
		private loginService: LoginService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.loginService.obterLoginStatus()
			? this.router.navigate(['/home'])
			: null;
	}

	handleCheckBox(event: any) {
		this.isRememberChecked = event.target.checked;
	}

	onSubmit(): void {
		let data: any = this.loginForm.value;
		this.loginService.fetchLogin(data).subscribe({
			next: (data) => {
				this.isCredentialInvalid = false;
				this.loginService.autorizar(data, this.isRememberChecked);
				this.router.navigate(['/home']);
			},
			error: (err) => {
				this.isCredentialInvalid = true;
			},
		});
	}
}
