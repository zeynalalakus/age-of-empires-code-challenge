import {Component, OnDestroy, OnInit} from '@angular/core';
import {Unit} from "../../shared/models/unit";
import {Store} from "@ngrx/store";
import {unitsStateSelector,} from "../store/units.selectors";
import * as unitsActions from '../store/units.actions';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit, OnDestroy {
  // this is the original units list
  units: Unit[] = [];
  // this filteredUnits list will be used to move units to list component
  filteredUnits: Unit[] = [];
  // this subscription will be used to unsubscribe when component is destroyed
  selectorSubscription: Subscription;

  constructor(private unitsStore: Store) {
    // checking store if units are loaded or not
    // if units are loaded, taking units and assigning it to the units and filteredUnits
    // if units are not loaded, dispatching loadUnits so that store will be changed so this observer will get new state
    this.selectorSubscription = this.unitsStore.select(unitsStateSelector).subscribe(state => {
      if (state.loaded) {
        this.units = state.units;
        this.filteredUnits = state.units;
      } else {
        this.unitsStore.dispatch(unitsActions.loadUnits());
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.selectorSubscription.unsubscribe();
  }

  // this function emits the form changes from the search component
  // first gets all units from the original units list (this.units)
  onFormValueChange(form: any) {
    this.filteredUnits = [...this.units];
    // if all is included, no need to filter by age
    if (!form.ages.includes('all')) {
      this.filteredUnits = this.filteredUnits.filter(unit => form.ages.includes(unit.age.toLowerCase()));
    }
    // if food is checked, filter by food range
    if (form.food) {
      this.filteredUnits = this.filterBy('Food', form.foodRange);
    }
    // if wood is checked, filter by wood range
    if (form.wood) {
      this.filteredUnits = this.filterBy('Wood', form.woodRange);
    }
    // if gold is checked, filter by gold range
    if (form.gold) {
      this.filteredUnits = this.filterBy('Gold', form.goldRange);
    }
  }

  // this is a helper function to use cost type and range to filter
  filterBy(cost: 'Wood' | 'Food' | 'Gold', range: number) {
    return this.filteredUnits.filter(unit => unit.cost && unit.cost[cost] && unit.cost[cost]! <= range);
  }
}
