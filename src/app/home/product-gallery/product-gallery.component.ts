import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {
	public products = [
			{
				image: 'assets/img/product/1.jpg',
				title: 'Product Name1'
			},{
				image: 'assets/img/product/1.jpg',
				title: 'Product Name2'
			},{
				image: 'assets/img/product/1.jpg',
				title: 'Product Name3'
			},{
				image: 'assets/img/product/1.jpg',
				title: 'Product Name4'
			}
	]
  constructor() { }

  ngOnInit() {
  }

}
