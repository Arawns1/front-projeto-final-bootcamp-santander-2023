import { Component } from '@angular/core';
import { Card } from 'src/app/model/cardModel';

@Component({
	selector: 'cards-list',
	templateUrl: './cards-list.component.html',
	styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
	cardsList: Array<Card> = [
		{
			id: 1,
			finalNumber: '0001',
		},
		{
			id: 2,
			finalNumber: '1002',
		},
		{
			id: 3,
			finalNumber: '2003',
		},
	];
}
