import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsSearchComponent } from './units-search/units-search.component';
import { UnitsListComponent } from './units-list/units-list.component';
import { UnitsComponent } from './units/units.component';
import { UnitsDetailComponent } from './units-detail/units-detail.component';
import {UnitsRoutingModule} from "./units-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {StoreModule} from "@ngrx/store";
import {Units_Store_Name} from "./store/units.selectors";
import {UnitsReducer} from "./store/units.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UnitsEffects} from "./store/units.effects";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    UnitsSearchComponent,
    UnitsListComponent,
    UnitsComponent,
    UnitsDetailComponent
  ],
    imports: [
        CommonModule,
        UnitsRoutingModule,
        StoreModule.forFeature({name: Units_Store_Name, reducer: UnitsReducer}),
        EffectsModule.forFeature([UnitsEffects]),
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        MatRadioModule,
        MatSliderModule,
        MatCheckboxModule,
        MatCardModule,
        FlexModule
    ]
})
export class UnitsModule { }
