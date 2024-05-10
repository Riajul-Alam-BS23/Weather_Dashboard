// weather-display.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './app-weather-display.component.html',
  styleUrls: ['./app-weather-display.component.css']
})
export class AppWeatherDisplayComponent implements OnInit {
  constructor(private data: DataService) { }
  isTrue: boolean=false;
  city: { name: string, temperature: number, conditions: string, icon: string };
  ngOnInit(): void {
    this.data.selectedCity.subscribe((city: { name: string, temperature: number, conditions: string, icon: string }) => {
      this.city = city;
    });
    // this.data.citySelected.subscribe((res: boolean) => {
    //   this.isTrue = res;
    // })
    this.data.citySelected.subscribe((response: boolean) => {
      this.isTrue = response;
    })
  }
}
