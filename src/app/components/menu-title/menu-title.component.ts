import { Component, Input } from '@angular/core';
import { Account } from 'src/app/model/accountModel';

@Component({
	selector: 'menu-title',
	templateUrl: './menu-title.component.html',
	styleUrls: ['./menu-title.component.css'],
})
export class MenuTitleComponent {
	@Input() account: Account = new Account();
}
