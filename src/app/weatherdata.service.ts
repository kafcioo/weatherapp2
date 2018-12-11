import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weather } from '../app/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  constructor(private http: HttpClient) { }
  public link = 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,38,35&APPID=194333f5b09188fbda8c4a3bbfea30b2'
  
  getWeatherData() {
    return this.http.get(this.link)
   
 }
}
