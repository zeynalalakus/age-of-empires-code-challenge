import {Injectable, OnDestroy} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class TitleResolverService implements Resolve<string> {
  constructor(private store: Store) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    const id = route.paramMap.get('id');
    if (id) {
      return `Unit - ${id}`
    }
    return 'Units - Detail Page';
  }

}
