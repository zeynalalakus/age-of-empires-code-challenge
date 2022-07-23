import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnitsModule} from "./units/units.module";
import {HomeComponent} from './main/home/home.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TitleStrategy} from "@angular/router";
import {CustomTitleStrategyService} from "./shared/services/custom-title-strategy.service";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UnitsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    MatCardModule
  ],
  providers: [
    // this is the custom title strategy in order to add 'AoE' in front of every title
    {provide: TitleStrategy, useClass: CustomTitleStrategyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
