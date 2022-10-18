import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GetApiDataService } from '../../services/get-api-data.service';
import {Observable} from "rxjs";
import {CategoryDTOModel} from "../../models/category-dto.model";

@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  constructor(private _getApiDataService: GetApiDataService) {
  }

  categories$: Observable<CategoryDTOModel[]> = this._getApiDataService.getCategoriesData();
}
