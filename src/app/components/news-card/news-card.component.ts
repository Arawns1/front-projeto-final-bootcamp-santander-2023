import { Component, Input } from '@angular/core';
import { News } from 'src/app/model/newsModel';

@Component({
	selector: 'news-card',
	templateUrl: './news-card.component.html',
	styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent {
	@Input() news: News = {};
	get icon() {
		return this.news.icon;
	}
	get description() {
		return this.news.description;
	}
}
