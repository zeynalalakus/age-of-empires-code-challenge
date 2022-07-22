import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Unit} from "../../shared/models/unit";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss']
})
export class UnitsListComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() units: Unit[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'costs', 'detail'];
  dataSource!: MatTableDataSource<Unit>;
  public pageSizeOptions = [10, 25, 50, 100];
  public offset = 0;
  public limit = 10;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.loadDatasource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.loadDatasource();
  }

  loadDatasource() {
    this.dataSource = new MatTableDataSource(this.units);
    if (this.paginator) {
      this.paginator.firstPage();
      this.dataSource.paginator = this.paginator;
    }
    this.dataSource.sort = this.sort;
  }
}
