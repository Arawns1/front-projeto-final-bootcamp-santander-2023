import { Component, Input } from '@angular/core';
import { Feature } from 'src/app/model/featureModel';

@Component({
	selector: 'feature-card',
	templateUrl: './feature-card.component.html',
	styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent {
	@Input() feature: Feature = {};

	get icon() {
		return this.feature.icon;
	}
	get name() {
		return this.feature.name;
	}
}
