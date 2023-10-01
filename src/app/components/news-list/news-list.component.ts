import { Component } from '@angular/core';
import { News } from 'src/app/model/newsModel';

@Component({
	selector: 'news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent {
	newsList: Array<News> = [
		{
			id: 1,
			description:
				'O Santander tem soluções de crédito sob medida para você. Confira!',
			icon: '../../../assets/money-coin-icon.svg',
		},
		{
			id: 2,
			description:
				'Santander Seguro Casa, seu faz-tudo. Mais de 50 serviços pra você. Confira.',
			icon: '../../../assets/wrench-icon.svg',
		},
	];
}
