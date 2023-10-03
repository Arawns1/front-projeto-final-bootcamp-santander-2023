import { Component } from '@angular/core';
import { PaymentMethod } from 'src/app/model/paymentMethodModel';
import { PaymentMethodsService } from 'src/app/services/payment-methods.service';

@Component({
	selector: 'feature-list',
	templateUrl: './feature-list.component.html',
	styleUrls: ['./feature-list.component.css'],
})
export class FeatureListComponent {
	// featureList: Array<Feature> = [
	// 	{
	// 		id: 1,
	// 		name: 'PIX',
	// 		icon: '../../../assets/pix-icon.svg',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Pagar',
	// 		icon: '../../../assets/barcode-icon.svg',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Transferir',
	// 		icon: '../../../assets/transfer-icon.svg',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Transferir',
	// 		icon: '../../../assets/transfer-icon.svg',
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Transferir',
	// 		icon: '../../../assets/transfer-icon.svg',
	// 	},
	// ];

	featureList: Array<PaymentMethod> = [];
	constructor(private paymentMethodsService: PaymentMethodsService) {}

	ngOnInit() {
		this.paymentMethodsService.fetchPaymentMethods().subscribe({
			next: (res: Array<any>) => {
				this.featureList = res;
			},
			error: (err) => {
				console.error(
					"Wasn't possible to load Payment Methods. Try again later!"
				);
			},
		});
	}
}
