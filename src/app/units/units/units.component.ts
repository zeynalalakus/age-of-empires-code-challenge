import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnitsService} from "../../shared/services/units.service";
import {Unit} from "../../shared/models/unit";
import {Store} from "@ngrx/store";
import {unitsStateSelector,} from "../store/units.selectors";
import * as unitsActions from '../store/units.actions';
import {Subscription} from "rxjs";
import {query} from "@angular/animations";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit, OnDestroy {
  units: Unit[] = [];
  filteredUnits: Unit[] = [];
  selectorSubscription: Subscription;

  constructor(private unitsStore: Store) {
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

  onFormValueChange(form: any) {
    this.filteredUnits = [...this.units];
    if (!form.ages.includes('all')) {
      this.filteredUnits = this.filteredUnits.filter(unit => form.ages.includes(unit.age.toLowerCase()));
    }
    if (form.food) {
      this.filteredUnits = this.filterBy('Food', form.foodRange);
    }
    if (form.wood) {
      this.filteredUnits = this.filterBy('Wood', form.woodRange);
    }
    if (form.gold) {
      this.filteredUnits = this.filterBy('Gold', form.goldRange);
    }
  }

  filterBy(cost: 'Wood' | 'Food' | 'Gold', range: number) {
    return this.filteredUnits.filter(unit => unit.cost && unit.cost[cost] && unit.cost[cost]! <= range);
  }
}
