import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class SidenavService {
	constructor() {}

	opened: boolean = false;

	toggle() {
		this.opened = !this.opened;
	}
}
