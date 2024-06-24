import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { City } from '../shared/City.model';

@Component({
  selector: 'app-city-selector',
  templateUrl: './app-city-selector.component.html',
  styleUrls: ['./app-city-selector.component.css']
})
export class AppCitySelectorComponent implements OnInit {
  cities:City[] = [];
  filteredCities: City[] = [];
  showSearch: boolean = false;
  searchQuery: string = '';
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getWeatherData().subscribe({
      next: (res) => {
        this.cities = res;
        this.filteredCities = res;
        console.log(res);
      }
    })
  }

  onClick(city:City) {
    this.data.selectedCity.next(city);
    this.data.citySelected.next(true);
  }


  toggleSearchInput() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
      this.filteredCities = this.cities;
    }
  }
  onClickInput(event: MouseEvent): void {
    event.stopPropagation(); // Prevent click event from bubbling up
  }
  filterCities() {
    this.filteredCities = this.cities
      .filter(city =>
        city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
}
