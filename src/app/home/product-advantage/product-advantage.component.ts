import { Component, OnInit, AfterViewInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-product-advantage",
  templateUrl: "./product-advantage.component.html",
  styleUrls: ["./product-advantage.component.scss"]
})


export class ProductAdvantageComponent implements OnInit, AfterViewInit {
  constructor() {}

	ngOnInit() {}
	
	ngAfterViewInit(): void {
		$(document).ready(function () {
			function percentCircle() {
					$(".demo-1,.demo-2,.demo-3,.demo-4").percentcircle({
							animate: true,
							bgColor: "#F1F1F1",
							fillColor: "#f5a715",
							percentSize: "18px"
					});
					$(".ab").css({
							width: "112px",
							height: "112px"
					});
					$(".cir").css({
							width: "100px",
							height: "100px",
							top: "6px",
							left: "6px",
							background: "#f5f5f5"
					});
					$(".perc").css({
							width: "100px",
							height: "100px",
							lineHeight: "100px",
							color: "#313131",
							fontWeight: "700",
							fontSize: "18px"
					});
					// $(".demo-1 .perc").text("75%");
					// $(".demo-2 .perc").text("50%");
					// $(".demo-3 .perc").text("70%");
					// $(".demo-4 .perc").text("60%");
			}
			percentCircle();
		});
	}
}
