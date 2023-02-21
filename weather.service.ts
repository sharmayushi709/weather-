import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from './weather.module';
import { Title } from '@angular/platform-browser';
import { applyStyles } from '@popperjs/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams().set('q', cityName).set('units', 'standard'),
    });
  }
}
// getWeatherData()
// {
//   let url=:"https://jsonformatter.curiousconcept.com/#"
//   return this.htpp.get(url);
// }

//   }
