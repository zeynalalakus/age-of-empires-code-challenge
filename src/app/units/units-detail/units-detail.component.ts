import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap} from "rxjs";
import {unitsSelector} from "../store/units.selectors";
import {Unit} from "../../shared/models/unit";
@Component({
  selector: 'app-units-detail',
  templateUrl: './units-detail.component.html',
  styleUrls: ['./units-detail.component.scss']
})
export class UnitsDetailComponent implements OnInit {
  selectedUnit!: Unit;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.route.params.pipe(
      mergeMap(params => this.store.select(unitsSelector).pipe(
        map(units => units.find(unit => unit.id === +params['id']))
      ))
    ).subscribe(unit => {
      if (unit) {
        this.selectedUnit = unit;
      }
    })
  }

  ngOnInit(): void {
  }

}
