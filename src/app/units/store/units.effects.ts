import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UnitsService} from "../../shared/services/units.service";
import * as unitsActions from './units.actions';
import {catchError, EMPTY, map, mergeMap} from "rxjs";

@Injectable()
export class UnitsEffects {

  // this is effect used to load units
  // after loading units, it returns loadUnitsSuccessful action which will load units to the store
  loadUnits$ = createEffect(() => this.actions$.pipe(
    ofType(unitsActions.loadUnits),
    mergeMap(() => this.unitsService.getAllUnits().pipe(
      map(units => unitsActions.loadUnitsSuccessful({units})),
      catchError(() => EMPTY)
    ))
  ))

  constructor(private actions$: Actions, private unitsService: UnitsService) {
  }
}
