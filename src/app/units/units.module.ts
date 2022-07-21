import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsSearchComponent } from './units-search/units-search.component';
import { UnitsListComponent } from './units-list/units-list.component';
import { UnitsComponent } from './units/units.component';
import { UnitsDetailComponent } from './units-detail/units-detail.component';
import {UnitsRoutingModule} from "./units-routing.module";



@NgModule({
  declarations: [
    UnitsSearchComponent,
    UnitsListComponent,
    UnitsComponent,
    UnitsDetailComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
