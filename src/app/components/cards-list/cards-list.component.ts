import { Component } from '@angular/core';
import { Card } from 'src/app/model/cardModel';
import { CardService } from 'src/app/services/card.service';

@Component({
	selector: 'cards-list',
	templateUrl: './cards-list.component.html',
	styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
	constructor(private cardService: CardService) {}

	cardsList: Array<Card> = [];

	ngOnInit() {
		this.cardService.fetchCards().subscribe({
			next: (res: []) => {
				res.forEach((data: Card) => {
					this.cardsList.push(
						new Card(data.id, data.number, data.type, data.limit)
					);
				});
			},
			error: (err) => {
				console.error(err);
			},
		});
	}
}
