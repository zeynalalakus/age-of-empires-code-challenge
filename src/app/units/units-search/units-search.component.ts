import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-units-search',
  templateUrl: './units-search.component.html',
  styleUrls: ['./units-search.component.scss']
})
export class UnitsSearchComponent implements OnInit {
  searchForm: FormGroup;
  @Output() formChangeEmitter = new EventEmitter<any>();
  constructor() {
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
    this.searchForm.valueChanges.subscribe(form => {
      this.formChangeEmitter.emit(form);
    })
  }

  sendForm() {
    console.log(this.searchForm.value);
  }

  onCostSelectionChanged(cost: string, range: string) {
    const value = this.searchForm.controls[cost].value;
    if (value) {
      this.searchForm.controls[range].enable();
    } else {
      this.searchForm.controls[range].disable();
    }
  }
}

interface ISearchForm {
  ages: FormControl<string[]>,
  wood: FormControl<boolean>,
  food: FormControl<boolean>,
  gold: FormControl<boolean>,
  woodRange: FormControl<number>,
  foodRange: FormControl<number>,
  goldRange: FormControl<number>
}
