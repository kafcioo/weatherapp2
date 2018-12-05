import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.scss']
})
export class CitydetailsComponent implements OnInit {

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
