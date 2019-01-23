import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

// import { Http, HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { AppRoutingModule } from './app-routing.module';

// import { OwlModule } from "ngx-owl-carousel";

import { LightboxModule } from "ngx-lightbox";

import { SharedModulesModule } from "./shared-modules/shared-modules.module";
import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { rootRouterConfig } from "./app.routes";
import { ProductsService } from "./services/products.service";

const routes = [
	{ path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
		AppComponent,
		HomeComponent,
	],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
		SharedModulesModule,
		HomeModule,
    // OwlModule,
    LightboxModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
