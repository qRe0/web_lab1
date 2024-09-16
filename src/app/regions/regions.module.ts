import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionCenterComponent } from './regions/region-center/region-center.component';
import { RegionListComponent } from './regions/region-list/region-list.component';
import { RegionDetailsComponent } from './regions/region-details/region-details.component';
import { RegionFormComponent } from './regions/region-form/region-form.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RegionCenterComponent,
    RegionListComponent,
    RegionDetailsComponent,
    RegionFormComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    RouterLink,
    FormsModule
  ]
})
export class RegionsModule { }
