import { LoginService } from './../services/login.service';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class authGuard implements CanActivate {
	isLogged: boolean = false;
	constructor(
		private loginService: LoginService,
		private routerService: Router
	) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| boolean
		| UrlTree
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree> {
		this.isLogged = this.loginService.obterLoginStatus();
		if (this.isLogged) {
			return true;
		}
		this.routerService.navigate(['']);
		return false;
	}
}
