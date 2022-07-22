import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Unit} from "../../shared/models/unit";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss']
})
export class UnitsListComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() units: Unit[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'costs', 'action'];
  dataSource!: MatTableDataSource<Unit>;
  public pageSizeOptions = [10, 25, 50, 100];
  public offset = 0;
  public limit = 10;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadDatasource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.loadDatasource();
  }

  navigateToDetail(row: Unit) {
    this.router.navigate(['units/detail/' + row.id])
  }

  onPaginatorChange(pageEvent: PageEvent) {
    this.limit = pageEvent.pageSize;
    this.offset = (pageEvent.pageIndex * pageEvent.pageSize);
    this.dataSource = new MatTableDataSource(this.units.slice(this.offset, this.offset + this.limit));
    this.dataSource.data = this.units.slice(this.offset, this.offset + this.limit);
    this.dataSource.sort = this.sort;
  }

  loadDatasource() {
    this.dataSource = new MatTableDataSource(this.units);
    this.dataSource.sort = this.sort;
    if (!Array.isArray(this.units) || !this.units.length) {
      console.log('empty');
    } else {
      this.dataSource.data = this.units.slice(0, this.limit);
    }
  }
  onSortChange(sort: Sort) {
    this.loadDatasource();
  }
}
