import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
@Injectable()
export class DataService implements OnInit{
    selectedCity = new EventEmitter<{ name: string, temperature: number, condition: string, icon: string }>();
    citySelected = new EventEmitter <boolean>();
    ngOnInit(): void {
        
    }
    constructor(private http: HttpClient) { }
    getWeatherData() {
       return this.http.get<{name:string,temperature:number,condition:string,icon:string}[]>("../assets/data/weather-data.json");
    }
    // triggerCitySelectedEvent(value: boolean) {
    //     this.citySelected.emit(value);
    // }
    
}