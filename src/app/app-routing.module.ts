import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModulesModule } from "./shared-modules/shared-modules.module";

const routes: Routes = [];

@NgModule({
	declarations: [],
  imports: [
		RouterModule.forRoot(routes),
		SharedModulesModule
	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
