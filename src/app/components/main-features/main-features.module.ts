import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeaturesComponent } from './main-features.component';
import { FeatureListModule } from '../feature-list/feature-list.module';
import { CardsListComponent } from '../cards-list/cards-list.component';
import { NewsCardComponent } from '../news-card/news-card.component';
import { BalanceCardComponent } from '../balance-card/balance-card.component';
import { LucideAngularModule, ChevronUp } from 'lucide-angular';

@NgModule({
	declarations: [
		MainFeaturesComponent,
		BalanceCardComponent,
		CardsListComponent,
		NewsCardComponent,
	],
	imports: [
		CommonModule,
		FeatureListModule,
		LucideAngularModule.pick({ ChevronUp }),
	],
	exports: [MainFeaturesComponent],
})
export class MainFeaturesModule {}
