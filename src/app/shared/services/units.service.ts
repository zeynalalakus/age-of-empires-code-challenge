import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Unit} from "../models/unit";
import {ageOfEmpiresData} from "../../../data";

@Injectable({
  providedIn: "root"
})
export class UnitsService {
  getAllUnits(): Observable<Unit[]> {
    return of(ageOfEmpiresData.units);
  }
}
