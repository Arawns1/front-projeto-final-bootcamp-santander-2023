import { Component } from '@angular/core';
import { Feature } from 'src/app/model/featureModel';

@Component({
	selector: 'feature-list',
	templateUrl: './feature-list.component.html',
	styleUrls: ['./feature-list.component.css'],
})
export class FeatureListComponent {
	featureList: Array<Feature> = [
		{
			id: 1,
			name: 'PIX',
			icon: '../../../assets/pix-icon.svg',
		},
		{
			id: 2,
			name: 'Pagar',
			icon: '../../../assets/barcode-icon.svg',
		},
		{
			id: 3,
			name: 'Transferir',
			icon: '../../../assets/transfer-icon.svg',
		},
		{
			id: 4,
			name: 'Transferir',
			icon: '../../../assets/transfer-icon.svg',
		},
		{
			id: 5,
			name: 'Transferir',
			icon: '../../../assets/transfer-icon.svg',
		},
	];
}
