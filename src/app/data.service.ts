import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { City } from "./shared/City.model";
import { BehaviorSubject } from "rxjs";
@Injectable()
export class DataService{
    selectedCity = new BehaviorSubject<City>(null);
    citySelected = new BehaviorSubject <boolean>(false);
    constructor(private http: HttpClient) { }
    getWeatherData() {
       return this.http.get<City[]>("./assets/data/weather-data.json");
    } 
}