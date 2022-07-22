import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsDetailComponent } from './units-detail.component';
import {provideMockStore} from "@ngrx/store/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {unitsStateSelector} from "../store/units.selectors";
import {ageOfEmpiresData} from "../../../data";
import {MatCardModule} from "@angular/material/card";
import {By} from "@angular/platform-browser";

describe('UnitsDetailComponent', () => {
  let component: UnitsDetailComponent;
  let fixture: ComponentFixture<UnitsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsDetailComponent ],
      imports: [RouterTestingModule, MatCardModule],
      providers: [provideMockStore({selectors: [{selector: unitsStateSelector, value: {loaded: true, units: ageOfEmpiresData.units}}]}),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: 1,
            }),
          },
        }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the selected unit', () => {
    // selectedUnit is the one with id = 1, so it is the first one in the list
    expect(component.selectedUnit?.id).toBe(ageOfEmpiresData.units[0].id);
  });
  it('should display multiple properties in the template', () => {
    const el = fixture.debugElement.queryAll(By.css('p'));
    // labels
    expect(el[0].children[0].nativeElement.innerText).toBe('ID: ');
    expect(el[1].children[0].nativeElement.innerText).toBe('Name: ');
    expect(el[2].children[0].nativeElement.innerText).toBe('Description: ');
    expect(el[3].children[0].nativeElement.innerText).toBe('Min. Required Age: ');
    expect(el[4].children[0].nativeElement.innerText).toBe('Wood Cost: ');
    expect(el[5].children[0].nativeElement.innerText).toBe('Food Cost: ');
    expect(el[6].children[0].nativeElement.innerText).toBe('Gold Cost: ');
    expect(el[7].children[0].nativeElement.innerText).toBe('Build Time: ');
    expect(el[8].children[0].nativeElement.innerText).toBe('Reload Time: ');
    expect(el[9].children[0].nativeElement.innerText).toBe('Hit Points: ');
    expect(el[10].children[0].nativeElement.innerText).toBe('Attack: ');
    expect(el[11].children[0].nativeElement.innerText).toBe('Accuracy: ');

    //labels + values
    expect(el[0].nativeElement.innerText).toBe('ID: ' + component.selectedUnit?.id);
    expect(el[1].nativeElement.innerText).toBe('Name: ' + component.selectedUnit?.name);
    expect(el[11].nativeElement.innerText).toBe('Accuracy: ' + component.selectedUnit?.accuracy);
  });
});
