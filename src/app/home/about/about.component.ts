import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	
	aboutSliderOptions = {
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			nav: true,
			dots: false,
			navText: [
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
			]
	};
}
