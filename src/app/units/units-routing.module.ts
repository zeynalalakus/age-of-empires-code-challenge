import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UnitsComponent} from "./units/units.component";
import {UnitsDetailComponent} from "./units-detail/units-detail.component";
import {TitleResolverService} from "../shared/services/title-resolver.service";

const routes: Routes = [
  {path: '', component: UnitsComponent},
  // using titleResolverService to use id in the title
  {path: 'detail/:id', component: UnitsDetailComponent, title: TitleResolverService}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule {}
