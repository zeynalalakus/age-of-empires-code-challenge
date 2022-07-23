import {createAction, props} from "@ngrx/store";
import {Unit} from "../../shared/models/unit";

// this is the action for the store effects
export const loadUnits = createAction(
  '[Units] Load Units'
)

// if previous one gets all units, this will be used to save them to the store
export const loadUnitsSuccessful = createAction(
  '[Units] Load Units Successful',
  props<{units: Unit[]}>()
)

// this is a backup action, if loading fails
// failing is not possible as of now, because we are using hard-coded units
export const loadUnitsFailure = createAction(
  '[Units] Load Units Failure'
)

