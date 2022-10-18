import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDTOModel} from "../models/category-dto.model";

@Injectable()
export class GetApiDataService {
  constructor(private _httpClient: HttpClient) {
  }
  getCategoriesData(): Observable<CategoryDTOModel[]> {
    return this._httpClient.get<CategoryDTOModel[]>('https://fakestoreapi.com/products/categories');
}
}
