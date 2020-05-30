import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CountryListComponent } from './country-list/country-list.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'countries',
    component: CountryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
