import { LucideAngularModule, Menu, Bell, ChevronUp } from 'lucide-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainFeaturesModule } from './components/main-features/main-features.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		MenuTitleComponent,
		MenuBarComponent,
		LoginComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MainFeaturesModule,
		FormsModule,
		ReactiveFormsModule,
		LucideAngularModule.pick({ Menu, Bell }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
