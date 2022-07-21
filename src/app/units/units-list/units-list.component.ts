import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Unit} from "../../shared/models/unit";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss']
})
export class UnitsListComponent implements OnInit {
  @Input() units: Unit[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'costs'];
  dataSource!: MatTableDataSource<Unit>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.units);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
