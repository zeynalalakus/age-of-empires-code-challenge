import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsComponent } from './units.component';
import {provideMockStore} from "@ngrx/store/testing";
import {unitsStateSelector} from "../store/units.selectors";
import {ageOfEmpiresData} from "../../../data";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsComponent ],
      providers: [provideMockStore({selectors: [{selector: unitsStateSelector, value: {units: ageOfEmpiresData.units, loaded: true}}]})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter units by ages', () => {
    fixture.detectChanges();
    const initialLength = component.filteredUnits.length;
    component.onFormValueChange({ages: ['imperial']});
    fixture.detectChanges();
    const filteredUnitsLength = component.filteredUnits.length;
    expect(initialLength).toBeGreaterThan(filteredUnitsLength);
  });
  it('should filter by food range', () => {
    component.onFormValueChange({ages: ['all'], food: true, foodRange: 50});
    fixture.detectChanges();
    const result = component.filteredUnits.every(unit => unit.cost && unit.cost.Food && unit.cost.Food <= 50);
    expect(result).toBeTruthy();
  });
  it('should filter by wood range', () => {
    component.onFormValueChange({ages: ['all'], wood: true, woodRange: 100});
    fixture.detectChanges();
    const result = component.filteredUnits.every(unit => unit.cost && unit.cost.Wood && unit.cost.Wood <= 100);
    expect(result).toBeTruthy();
  });
  it('should filter by gold range', () => {
    component.onFormValueChange({ages: ['all'], gold: true, goldRange: 150});
    fixture.detectChanges();
    const result = component.filteredUnits.every(unit => unit.cost && unit.cost.Gold && unit.cost.Gold <= 150);
    expect(result).toBeTruthy();
  });
});
