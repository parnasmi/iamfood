import { Component, OnInit } from '@angular/core';
import { GetSettingsService } from "../services/get-settings.service";
// import { Subscription } from "rxjs";
// import { take } from "rxjs/operators";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"]
})
export class MenubarComponent implements OnInit {
  logoImg: any;
  menuItems: Object[];
  isLogoLoaded: boolean = false;
  menuId = [];
	submenuAll: any;
	
  constructor(private getSettingsService: GetSettingsService) {}

  ngOnInit(): void {
    this.getLogo();
    this.getMenuItems();
  }

  getLogo(): void {
    this.getSettingsService
      .getLogo()
      .subscribe(infos => (this.logoImg = infos[0]));
  }

  getMenuItems(): void {
    this.getSettingsService.getMenuItemsFromDB().subscribe(data => {
			this.menuItems = data.page;
    });
  }
}
