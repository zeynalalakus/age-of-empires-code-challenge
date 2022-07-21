import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSearchComponent } from './units-search.component';

describe('UnitsSearchComponent', () => {
  let component: UnitsSearchComponent;
  let fixture: ComponentFixture<UnitsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
