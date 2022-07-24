import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-units-search',
  templateUrl: './units-search.component.html',
  styleUrls: ['./units-search.component.scss']
})
export class UnitsSearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  // this is the eventEmitter used to emit form changes to parent component
  @Output() formChangeEmitter = new EventEmitter<any>();
  formSubscription!: Subscription;
  // screen width will be used to make mat-button-toggle-group vertical if it is below 550
  public screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  constructor() {
    // search form is a typed form
    // we do not need a resetting functionality but if we reset the form, controls will not be null, instead they will take initial values like ['all'], 0 ...
    this.searchForm = new FormGroup<ISearchForm>({
      ages: new FormControl<string[]>(['all'], {nonNullable: true}),
      wood: new FormControl<boolean>(false, {nonNullable: true}),
      woodRange: new FormControl<number>({value: 0, disabled: true}, {nonNullable: true}),
      food: new FormControl<boolean>(false, {nonNullable: true}),
      foodRange: new FormControl<number>({value: 0, disabled: true}, {nonNullable: true}),
      gold: new FormControl<boolean>(false, {nonNullable: true}),
      goldRange: new FormControl<number>({value: 0, disabled: true}, {nonNullable: true}),
    })
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    // subscribing to form changes in order to emit updated form to parent component
    this.formSubscription = this.searchForm.valueChanges.subscribe(form => {
      this.formChangeEmitter.emit(form);
    })
  }

  // this is used to enable or disable range controls based on whether cost checkboxes are checked or not
  // using cost name to check it is true or false
  // using range to find the cost's range to make it enabled or disabled
  onCostSelectionChanged(cost: string, range: string) {
    const value = this.searchForm.controls[cost].value;
    if (value) {
      this.searchForm.controls[range].enable();
    } else {
      this.searchForm.controls[range].disable();
    }
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}

// this is the interface used for searchForm type
interface ISearchForm {
  ages: FormControl<string[]>,
  wood: FormControl<boolean>,
  food: FormControl<boolean>,
  gold: FormControl<boolean>,
  woodRange: FormControl<number>,
  foodRange: FormControl<number>,
  goldRange: FormControl<number>
}
