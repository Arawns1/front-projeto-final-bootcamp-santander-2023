import { Component } from '@angular/core';

@Component({
	selector: 'menu-title',
	templateUrl: './menu-title.component.html',
	styleUrls: ['./menu-title.component.css'],
})
export class MenuTitleComponent {
	owner: string = 'Gabriel';
	agency: string = '0001';
	accountNumber: string = '000000000-1';
}
