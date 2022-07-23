import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TitleResolverService implements Resolve<string> {
  constructor() {
  }
  // this is a title resolver service to be used for units detail page title
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    // getting the id from the route
    const id = route.paramMap.get('id');
    if (id) {
      return `Unit - ${id}`
    }
    // if id does not exist, using this one as the title
    return 'Units - Detail Page';
  }

}
