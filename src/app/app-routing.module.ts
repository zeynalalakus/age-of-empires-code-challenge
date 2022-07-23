import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {PageNotFoundComponent} from "./main/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'units', loadChildren: () => import('./units/units.module').then(m => m.UnitsModule), title: 'Units'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, title: 'Page not found'}
];

@NgModule({
  // preloading all modules because we have only one module and user will not wait longer to go to that module
  // so no need to load when user clicks
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
