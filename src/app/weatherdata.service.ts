import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  constructor(private http: HttpClient) { }

 getWeatherData() {
   return this.http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=194333f5b09188fbda8c4a3bbfea30b2')
   .pipe(map(result => result));
 }
}
