import { Component, OnInit, AfterViewInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})


export class TimelineComponent implements OnInit, AfterViewInit {
  constructor() {}

	ngOnInit() {}
	
	ngAfterViewInit(): void {
		$(document).ready(function () {
			function magnificVideo() {
					$(".popup-youtube").magnificPopup({ type: "iframe" });
					//iframe scripts
					$.extend(true, $.magnificPopup.defaults, {
							iframe: {
									patterns: {
											//youtube videos
											youtube: {
													index: "youtube.com/",
													id: "v=",
													src: "https://www.youtube.com/embed/%id%?autoplay=1"
											}
									}
							}
					});
			}
			magnificVideo();
		});
	}
}
