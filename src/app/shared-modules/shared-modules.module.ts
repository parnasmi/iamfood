import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component'

import { GetSettingsService } from './services/get-settings.service'

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HeaderComponent,
		FooterComponent,
		MenubarComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		MenubarComponent
	],
	providers: [
		GetSettingsService
	],
	entryComponents: []
})

export class SharedModulesModule { }