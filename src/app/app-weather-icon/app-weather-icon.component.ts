import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './app-weather-icon.component.html',
  styleUrl: './app-weather-icon.component.css'
})
export class AppWeatherIconComponent implements OnInit {
  constructor(private data: DataService) { }
  icon: string;
  ngOnInit(): void {
    this.data.selectedCity.subscribe((city: { name: string, temperature: number, condition: string, icon: string }) => {
      this.icon = city.icon;
    })
  }
}
