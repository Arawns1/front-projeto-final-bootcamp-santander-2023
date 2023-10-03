import { LucideAngularModule, Menu, Bell, LogOut } from 'lucide-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainFeaturesModule } from './components/main-features/main-features.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutItemComponent } from './components/logout-item/logout-item.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	declarations: [
		AppComponent,
		MenuTitleComponent,
		MenuBarComponent,
		LoginComponent,
		HomeComponent,
		LogoutItemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MainFeaturesModule,
		FormsModule,
		ReactiveFormsModule,
		LucideAngularModule.pick({ Menu, Bell, LogOut }),
		BrowserAnimationsModule,
		MatSidenavModule,
		MatDialogModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
