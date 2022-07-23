import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap, Subscription} from "rxjs";
import {unitsStateSelector} from "../store/units.selectors";
import {Unit} from "../../shared/models/unit";
import * as unitsActions from '../store/units.actions';
import {slideFromLeft} from "../../shared/animations/slideFromLeft";


@Component({
  selector: 'app-units-detail',
  templateUrl: './units-detail.component.html',
  styleUrls: ['./units-detail.component.scss'],
  animations: [slideFromLeft]
})
export class UnitsDetailComponent implements OnInit, OnDestroy {
  selectedUnit!: Unit | null;
  unitSub!: Subscription;
  // these are the displayed features with a label and a function which return a value.
  // value is a function because cost.Wood, cost.Food, cost.Gold, build_time, reload_time, attack, accuracy properties may not exist
  // and also a function will make that property more reusable
  displayedProperties = [
    {label: 'ID', value: (unit: Unit) => unit.id},
    {label: 'Name', value: (unit: Unit) => unit.name},
    {label: 'Description', value: (unit: Unit) => unit.description},
    {label: 'Min. Required Age', value: (unit: Unit) => unit.age},
    {label: 'Wood Cost', value: (unit: Unit) => unit.cost?.Wood ?? '-'},
    {label: 'Food Cost', value: (unit: Unit) => unit.cost?.Food ?? '-'},
    {label: 'Gold Cost', value: (unit: Unit) => unit.cost?.Gold ?? '-'},
    {label: 'Build Time', value: (unit: Unit) => unit.build_time ?? '-'},
    {label: 'Reload Time', value: (unit: Unit) => unit.reload_time ?? '-'},
    {label: 'Hit Points', value: (unit: Unit) => unit.hit_points},
    {label: 'Attack', value: (unit: Unit) => unit.attack ?? '-'},
    {label: 'Accuracy', value: (unit: Unit) => unit.accuracy ?? '-'},
  ]
  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // taking id from the route and checking store if units are loaded or not
    // if units are loaded, taking the filtered (by id) unit and assigning it to the selectedUnit
    // if units are not loaded, dispatching loadUnits so that store will be changed so this observer will get new state
    this.unitSub = this.route.params.pipe(
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
    this.unitSub.unsubscribe();
  }

}
