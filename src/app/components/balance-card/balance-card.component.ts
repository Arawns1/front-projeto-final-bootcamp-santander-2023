import { Component } from '@angular/core';

@Component({
	selector: 'balance-card',
	templateUrl: './balance-card.component.html',
	styleUrls: ['./balance-card.component.css'],
})
export class BalanceCardComponent {
	balance: number = 9324.64;
	balanceWithLimit: number = 4324.64;
}
