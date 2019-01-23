import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-blog-area",
  templateUrl: "./blog-area.component.html",
  styleUrls: ["./blog-area.component.scss"]
})
export class BlogAreaComponent implements OnInit {
  constructor() {}

	ngOnInit() {}
	
  blogSliderOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		dots: false,
		nav: true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		responsive:{
			0:{
				items: 1,
				margin: 0,
			},
			576:{
				items: 2,
				margin: 30,
			},
			1050:{
				items: 3,
				margin: 30,
			}
		}
	}
}
