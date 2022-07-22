import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap} from "rxjs";
import {unitsStateSelector} from "../store/units.selectors";
import {Unit} from "../../shared/models/unit";
import * as unitsActions from '../store/units.actions';
@Component({
  selector: 'app-units-detail',
  templateUrl: './units-detail.component.html',
  styleUrls: ['./units-detail.component.scss']
})
export class UnitsDetailComponent implements OnInit {
  selectedUnit!: Unit | null;
  displayedProperties = [
    {property: 'id', label: 'ID'}, {property: 'name', label: 'Name'},
    {property: 'description', label: 'Description'}, {property: 'age', label: 'Min. Required Age'},
    {property: 'cost.Wood', label: 'Wood Cost'}, {property: 'cost.Food', label: 'Food'},
    {property: 'cost.Gold', label: 'Gold Cost'}, {property: 'build_time', label: 'Build Time'}
  ]
  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
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

}
