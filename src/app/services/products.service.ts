import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private _http: HttpClient) { }

	public getAll() {
		return this._http.get("https://dekoraceprodomov.cz/json/getproducttop/cz/10/20");
	}
}
