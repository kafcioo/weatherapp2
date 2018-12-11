import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { WeatherdataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  let service; WeatherdataService
  beforeEach(() => TestBed.configureTestingModule({
   imports: [HttpClientTestingModule]
  }));

  service = TestBed.get(WeatherdataService) 
  it('should get weather data from api', () => {
    this.service.getWeatherData().subscribe(response => {
      expect(response.length).toBe(2)
    }
  });




});
