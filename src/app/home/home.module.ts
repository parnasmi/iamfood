import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OwlModule } from "ngx-owl-carousel";

import { SharedModulesModule } from "../shared-modules/shared-modules.module";
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProductAdvantageComponent } from './product-advantage/product-advantage.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { FoodsComponent } from './foods/foods.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { TestimonealComponent } from './testimoneal/testimoneal.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ContactAreaComponent } from './contact-area/contact-area.component';



@NgModule({
	declarations: [
	HeroAreaComponent,
	AboutComponent,
	GalleryComponent,
	TimelineComponent,
	ProductAdvantageComponent,
	ChooseUsComponent,
	FoodsComponent,
	ProductGalleryComponent,
	TestimonealComponent,
	BlogAreaComponent,
	TeamMemberComponent,
	ContactAreaComponent
	],
	imports: [
		CommonModule,
		SharedModulesModule,
		OwlModule
	],
	providers: [
		
	],
	exports: [
		HeroAreaComponent,
		AboutComponent,
		GalleryComponent,
		TimelineComponent,
		ProductAdvantageComponent,
		ChooseUsComponent,
		FoodsComponent,
		ProductGalleryComponent,
		TestimonealComponent,
		BlogAreaComponent,
		TeamMemberComponent,
		ContactAreaComponent
	]
})
export class HomeModule { }