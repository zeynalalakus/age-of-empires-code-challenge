import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UnitsState} from "./units.reducer";

// this is used in module to declare a name for this store
export const Units_Store_Name = 'Units';

// base feature selector to get state and be used in other selectors
const UnitsFeatureSelector = createFeatureSelector<UnitsState>(
  Units_Store_Name
);

// getting only loaded property from the store
export const areUnitsLoadedSelector = createSelector(
  UnitsFeatureSelector,
  (state) => state.loaded
)

// getting only units property from the store
export const unitsSelector = createSelector(
  UnitsFeatureSelector,
  (state) => state.units
)

// getting the whole state from the store
export const unitsStateSelector = createSelector(
  UnitsFeatureSelector,
  state => state
)
