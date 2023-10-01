import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

@NgModule({
	declarations: [FeatureListComponent, FeatureCardComponent],
	imports: [CommonModule],
	exports: [FeatureListComponent],
})
export class FeatureListModule {}
