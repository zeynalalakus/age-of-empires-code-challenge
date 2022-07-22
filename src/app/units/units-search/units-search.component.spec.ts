import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSearchComponent } from './units-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";

describe('UnitsSearchComponent', () => {
  let component: UnitsSearchComponent;
  let fixture: ComponentFixture<UnitsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsSearchComponent ],
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatButtonToggleModule, MatCheckboxModule, MatSliderModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have search form with fields: ages, food, foodRange, wood, woodRange, gold, goldRange', () => {
    expect(component.searchForm.controls['ages']).toBeTruthy();
    expect(component.searchForm.controls['food']).toBeTruthy();
    expect(component.searchForm.controls['foodRange']).toBeTruthy();
    expect(component.searchForm.controls['wood']).toBeTruthy();
    expect(component.searchForm.controls['woodRange']).toBeTruthy();
    expect(component.searchForm.controls['gold']).toBeTruthy();
    expect(component.searchForm.controls['goldRange']).toBeTruthy();
  });

  it('should disable/enable foodRange if food check is false/true', () => {
    component.searchForm.controls['food'].setValue(false);
    component.onCostSelectionChanged('food', 'foodRange');
    expect(component.searchForm.controls['foodRange'].disabled).toBeTrue();
    component.searchForm.controls['food'].setValue(true);
    component.onCostSelectionChanged('food', 'foodRange');
    expect(component.searchForm.controls['foodRange'].disabled).toBeFalse();
  });
});
