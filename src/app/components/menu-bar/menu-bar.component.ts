import { Component } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
@Component({
	selector: 'menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
	constructor(private sideNavService: SidenavService) {}

	navToggle() {
		this.sideNavService.toggle();
	}
}
