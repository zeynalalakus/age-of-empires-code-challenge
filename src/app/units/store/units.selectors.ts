import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UnitsState} from "./units.reducer";

export const Units_Store_Name = 'Units';


const UnitsFeatureSelector = createFeatureSelector<UnitsState>(
  Units_Store_Name
);

export const areUnitsLoadedSelector = createSelector(
  UnitsFeatureSelector,
  (state) => state.loaded
)

export const unitsSelector = createSelector(
  UnitsFeatureSelector,
  (state) => state.units
)

export const unitsStateSelector = createSelector(
  UnitsFeatureSelector,
  state => state
)
