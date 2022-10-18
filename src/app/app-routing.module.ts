import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { GetApiDataServiceModule } from './services/get-api-data.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'checkbox-categories', component: CategoriesListComponent }]), CategoriesListComponentModule, GetApiDataServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
