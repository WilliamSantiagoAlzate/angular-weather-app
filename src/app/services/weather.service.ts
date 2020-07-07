import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '039e44f41db4d97d8f006824ca917d7e'
  URI: string = '';
  constructor( private http: HttpClient ) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
