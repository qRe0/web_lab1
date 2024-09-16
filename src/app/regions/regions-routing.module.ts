import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegionCenterComponent} from './regions/region-center/region-center.component';
import {RegionListComponent} from './regions/region-list/region-list.component';
import {RegionDetailsComponent} from './regions/region-details/region-details.component';
import {RegionFormComponent} from "./regions/region-form/region-form.component";

const routes: Routes = [
  {
    path: '',
    component: RegionCenterComponent,
    children: [
      {
        path: '',
        component: RegionListComponent
      },
      {
        path: 'details/:id',
        component: RegionDetailsComponent
      },
      {
        path: 'form',
        component: RegionFormComponent
      },
      {
        path: 'form/:id',
        component: RegionFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule {
}
