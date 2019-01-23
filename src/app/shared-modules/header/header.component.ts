import { Component, OnInit } from '@angular/core';
import { GetSettingsService } from "../services/get-settings.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
	contactInfos: any;
	constructor(private getSettingsService: GetSettingsService) {}

	ngOnInit(): void {
		this.getContactInfo();
	}
	
	getContactInfo(): void {
		this.getSettingsService.getEmails().subscribe(contacts => this.contactInfos = contacts[0]);
	}
	
	
}
