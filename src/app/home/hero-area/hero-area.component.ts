import { Component, OnInit } from '@angular/core';
import { GetSettingsService } from "../../shared-modules/services/get-settings.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: "app-hero-area",
  templateUrl: "./hero-area.component.html",
  styleUrls: ["./hero-area.component.scss"]
})
export class HeroAreaComponent implements OnInit {
	sliderItems: Object[];
	sliderLoaded: boolean = false;
	constructor(private getSettingsService: GetSettingsService, private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
		this.getSliderItems();
  }

  heroSliderOptions = {
    items: 1,
    loop: true,
    // autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: true
  };

  getSliderItems(): void {
    this.getSettingsService
      .getMainSliderItems()
      .subscribe(items => {
				this.sliderItems = items;
				this.sliderLoaded = true;
				
			});
  }
}
