import {createAction, props} from "@ngrx/store";
import {Unit} from "../../shared/models/unit";

export const loadUnits = createAction(
  '[Units] Load Units'
)

export const loadUnitsSuccessful = createAction(
  '[Units] Load Units Successful',
  props<{units: Unit[]}>()
)

export const loadUnitsFailure = createAction(
  '[Units] Load Units Failure'
)

