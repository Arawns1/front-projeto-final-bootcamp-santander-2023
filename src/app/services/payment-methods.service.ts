import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginData } from '../model/loginDataModel';
import jwt_decode from 'jwt-decode';
import { environment } from '../utils/enviroment';
@Injectable({
	providedIn: 'root',
})
export class PaymentMethodsService {
	constructor(private http: HttpClient) {}

	fetchPaymentMethods(): Observable<any> {
		return this.http.get(`${environment.BASE_URL}/paymentmethods`);
	}
}
