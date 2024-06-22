import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { City } from "./shared/City.model";
@Injectable()
export class DataService{
    selectedCity = new EventEmitter<City>();
    citySelected = new EventEmitter <boolean>();
    constructor(private http: HttpClient) { }
    getWeatherData() {
       return this.http.get<City[]>("../assets/data/weather-data.json");
    } 
}