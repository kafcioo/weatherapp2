import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { WeatherdataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  let service: WeatherdataService;
  let HttpMock: HttpClientTestingModule;
  
  beforeEach(() => TestBed.configureTestingModule({
   imports: [HttpClientTestingModule]
  }));

  service = TestBed.get(WeatherdataService)
  httpMock = TestBed.get(HttpTestingController)
  it('should get weather data from api', () => {
    this.service.getWeatherData().subscribe(response => {
      expect(response.length).toBe(2)
    }

      const reqest = HttpMock.expectOne(`${service.ROOT_URL}/weather`)
    expect(reqest.reqest.method).toBe('GET')
  });




});
