import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

//weather:any;
  constructor(private weather:WeatherdataService) { }

  ngOnInit() {
    this.weather.getWeatherData().subscribe(response=>{
      this.weather=response.list;
      console.log(this.weather)
    }
    //weather => this.weather$ = weather
  )
  }

}
