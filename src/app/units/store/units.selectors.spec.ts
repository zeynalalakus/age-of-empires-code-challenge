import {UnitsState} from "./units.reducer";
import {ageOfEmpiresData} from "../../../data";
import {areUnitsLoadedSelector, unitsSelector, unitsStateSelector} from "./units.selectors";

describe("Selectors", () => {
  const initialState: UnitsState = {
    units: ageOfEmpiresData.units,
    loaded: true
  };

  it("should select loaded", () => {
    const areLoaded = areUnitsLoadedSelector.projector(initialState);
    expect(areLoaded).toBeTruthy();
  });
  it("should select units", () => {
    const units = unitsSelector.projector(initialState);
    expect(units.length).toBe(104);
  });
  it("should select units and loaded", () => {
    const state = unitsStateSelector.projector(initialState);
    expect(state.loaded).toBeTruthy();
    expect(state.units.length).toBe(104);
  });
});
