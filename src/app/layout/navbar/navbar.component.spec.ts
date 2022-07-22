import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {By} from "@angular/platform-browser";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [MatToolbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create router links', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].attributes['routerLink']).toBe('/home');
    expect(buttons[1].attributes['routerLink']).toBe('/units');
  });
});
