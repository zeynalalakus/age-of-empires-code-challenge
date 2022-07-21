import { Component, OnInit } from '@angular/core';
import {UnitsService} from "../../shared/services/units.service";
import {Unit} from "../../shared/models/unit";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units: Unit[] = [];
  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.unitsService.getAllUnits().subscribe(unitsList => {
      this.units = unitsList;
    })
  }

}
