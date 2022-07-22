import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UnitsListComponent } from './units-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ageOfEmpiresData} from "../../../data";
import {By} from "@angular/platform-browser";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

describe('UnitsListComponent', () => {
  let component: UnitsListComponent;
  let fixture: ComponentFixture<UnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsListComponent ],
      imports: [NoopAnimationsModule, RouterTestingModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule,
        MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsListComponent);
    component = fixture.componentInstance;
    component.units = ageOfEmpiresData.units;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should create the table rows', () => {
    const el = fixture.debugElement.queryAll(By.css('mat-row'));
    // mat-row length should be equal to 10 because it is default limit of the table
    expect(el.length).toBe(component.limit);
  });
  it('should change the paginator', fakeAsync(() => {
    // navigating to second page of table
    let btn = fixture.debugElement.query(By.css('.mat-paginator-navigation-next'));
    btn.triggerEventHandler('click', null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    // second page's first item should be 10th item of units
    const el = fixture.debugElement.queryAll(By.css('mat-row'))[0].children;
    expect(Number(el[0].nativeElement.innerText)).toBe(component.units[10].id);
    expect(el[1].nativeElement.innerText).toBe(component.units[10].name);
  }));

  it('should load the table again with ngOnChanges', fakeAsync(() => {
    const initialLength = component.units.length;
    component.units = component.units.slice(10);
    component.ngOnChanges();
    tick();
    fixture.detectChanges();
    expect(component.dataSource.data.length).toBe(initialLength - 10);
  }));
});
