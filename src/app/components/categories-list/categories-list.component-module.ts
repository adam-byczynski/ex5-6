import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
