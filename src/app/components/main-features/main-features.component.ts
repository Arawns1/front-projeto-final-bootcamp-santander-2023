import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
	selector: 'main-features',
	templateUrl: './main-features.component.html',
	styleUrls: ['./main-features.component.css'],
})
export class MainFeaturesComponent {
	constructor(private accountService: AccountService) {}
}
