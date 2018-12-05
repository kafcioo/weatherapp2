import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { CitydetailsComponent } from './citydetails/citydetails.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'citydetails/:id',
    component:CitydetailsComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
