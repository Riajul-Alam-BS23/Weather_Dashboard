// weather-display.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { City } from '../shared/City.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './app-weather-display.component.html',
  styleUrls: ['./app-weather-display.component.css']
})
export class AppWeatherDisplayComponent implements OnInit {
  constructor(private data: DataService) { }
  isTrue: boolean=false;
  city: City;
  ngOnInit(): void {
    this.data.selectedCity.subscribe((city:City) => {
      this.city = city;
    });
    this.data.citySelected.subscribe((response: boolean) => {
      this.isTrue = response;
    })
  }
  
}
