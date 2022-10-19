import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {GetApiDataService} from "../../services/get-api-data.service";
import {Observable} from "rxjs";
import {CategoryDTOModel} from "../../models/category-dto.model";

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  constructor(private _getApiDataService: GetApiDataService) {
  }

  categories$: Observable<CategoryDTOModel[]> = this._getApiDataService.getCategoriesData();
}
