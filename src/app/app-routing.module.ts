import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { GetApiDataServiceModule } from './services/get-api-data.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'checkbox-categories', component: CategoriesListComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }]), CategoriesListComponentModule, GetApiDataServiceModule, CategoriesMenuComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
