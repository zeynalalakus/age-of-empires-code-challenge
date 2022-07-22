import {Unit} from "../../shared/models/unit";
import {createReducer, on} from "@ngrx/store";
import * as unitsActions from './units.actions';

export interface UnitsState {
  units: Unit[],
  loaded: boolean
}

const initialState: UnitsState = {
  units: [],
  loaded: false
}

export const UnitsReducer = createReducer(
  initialState,
  on(unitsActions.loadUnitsSuccessful, (state, action) => ({...state, units: action.units, loaded: true})),
  on(unitsActions.loadUnitsFailure, (state) => ({...state, units: [], loaded: false}))
)
