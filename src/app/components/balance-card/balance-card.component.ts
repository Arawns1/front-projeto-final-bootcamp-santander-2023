import { Component, Input } from '@angular/core';
import { Account } from 'src/app/model/accountModel';

@Component({
	selector: 'balance-card',
	templateUrl: './balance-card.component.html',
	styleUrls: ['./balance-card.component.css'],
})
export class BalanceCardComponent {
	@Input() account: Account = new Account();
}
