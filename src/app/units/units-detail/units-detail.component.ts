import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap, Subscription} from "rxjs";
import {unitsStateSelector} from "../store/units.selectors";
import {Unit} from "../../shared/models/unit";
import * as unitsActions from '../store/units.actions';
@Component({
  selector: 'app-units-detail',
  templateUrl: './units-detail.component.html',
  styleUrls: ['./units-detail.component.scss']
})
export class UnitsDetailComponent implements OnInit, OnDestroy {
  selectedUnit!: Unit | null;
  unitsSub!: Subscription;
  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // taking id from the route and checking store if units are loaded or not
    // if units are loaded, taking the filtered (by id) unit and assigning it to the selectedUnit
    // if units are not loaded, dispatching loadUnits so that store will be changed so this observer will get new state
    this.unitsSub = this.route.params.pipe(
      mergeMap(params => this.store.select(unitsStateSelector).pipe(
        map(state => ({unit: state.units.find(unit => unit.id === +params['id']), areUnitsLoaded: state.loaded}))
      ))
    ).subscribe(obj => {
      if (obj.areUnitsLoaded) {
        this.selectedUnit = obj.unit ?? null;
      } else {
        this.store.dispatch(unitsActions.loadUnits());
      }
    })
  }

  ngOnDestroy() {
    this.unitsSub.unsubscribe();
  }

}
