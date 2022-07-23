import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Unit} from "../../shared/models/unit";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss'],
  // to leave this component out of change detection unless input is changed
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitsListComponent implements OnInit, AfterViewInit, OnChanges {
  // units are taken from parent units component
  @Input() units: Unit[] = [];
  // mat-table configs
  displayedColumns: string[] = ['id', 'name', 'age', 'costs'];
  dataSource!: MatTableDataSource<Unit>;
  public pageSizeOptions = [10, 25, 50, 100];
  public limit = 10;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.loadDatasource();
  }

  ngAfterViewInit() {
    // these will be undefined before this step
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    // this function will be called after units list is updated
    this.loadDatasource();
  }

  // used to load units into the mat-table
  loadDatasource() {
    this.dataSource = new MatTableDataSource(this.units);
    // resetting the paginator
    // in first run, paginator is not defined, no need to reset it in first run
    if (this.paginator) {
      this.paginator.firstPage();
      this.dataSource.paginator = this.paginator;
    }
    // connecting table sort to datasource sort
    this.dataSource.sort = this.sort;
  }
}
