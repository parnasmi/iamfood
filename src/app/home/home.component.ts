import { Component, OnInit, AfterViewInit } from "@angular/core";
//import { Router, ActivatedRoute } from "@angular/router";

//Services
import { ProductsService } from "../services/products.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit, AfterViewInit {
  
	public products;
	
  constructor(private _productsServices: ProductsService ) {
    
	}
	
  ngOnInit() {
		this._productsServices.getAll().subscribe(products => (this.products = products));
	}

  ngAfterViewInit(): void {
    $(document).ready(function() {
      
		}); //document ready
  }
  

}
