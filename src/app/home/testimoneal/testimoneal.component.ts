import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-testimoneal",
  templateUrl: "./testimoneal.component.html",
  styleUrls: ["./testimoneal.component.scss"]
})
export class TestimonealComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  testimonialSliderOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items: 1,
				margin: 0,
			},
			992:{
				items: 2,
				margin: 30,
			}
		}
	}
}
