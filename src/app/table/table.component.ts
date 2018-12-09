import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns = ['name', 'temperature', 'Longitude', 'Latitude', 'Humidity', 'Pressure','Wind-speed',
    'Wind-direction', 'Clouds'];
  dataSource: MatTableDataSource<weatherData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(private weather:WeatherdataService) {

  }
 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.weather.getWeatherData().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.list);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(response.list)

    });
  }


}
export interface weatherData {
  name: string;
}
