import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetSettingsService {

	constructor(private http: HttpClient) { }
	
	
	getEmails(): any {
		return this.http.get("http://backend.iamfood.life/cz/json/settings/emails");
	}
	
	getLogo(): any {
		return this.http.get("http://backend.iamfood.life/cz/json/settings/logo");
	}
	
	getMenuItemsFromDB(): any {
		return this.http.get("http://backend.iamfood.life/cz/json/rootmenu/");
	}
	
	getMainSliderItems(): any {
		return this.http.get("http://backend.iamfood.life/cz/json/settings/slider");
	}
	
	
}
