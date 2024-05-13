// // city-dropdown.component.ts
// import { Component, EventEmitter, Output,OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-city-selector',
//   templateUrl: './app-city-selector.component.html',
//   styleUrls: ['./app-city-selector.component.css']
// })
// export class AppCitySelectorComponent implements OnInit {

//   cities: {name:string,temperature:number,condition:string,icon:string}[] = [];
//   constructor(private data: DataService) { }
//   ngOnInit() {
//     this.data.getWeatherData().subscribe({
//       next: (res) => {
//         this.cities = res;
//         console.log(res);
//       }
//     })
//   }
//   onClick(city: { name: string, temperature: number, condition: string, icon: string }) {
//     this.data.selectedCity.emit(city);
//     this.data.citySelected.emit(true);
//   }
  
// }


// import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-city-selector',
//   templateUrl: './app-city-selector.component.html',
//   styleUrls: ['./app-city-selector.component.css']
// })
// export class AppCitySelectorComponent implements OnInit {
//   cities: { name: string, temperature: number, condition: string, icon: string }[] = [];
//   filteredCities: { name: string, temperature: number, condition: string, icon: string }[] = [];
//   showSearch: boolean = false;
//   searchQuery: string = '';

//   constructor(private data: DataService) { }

//   ngOnInit() {
//     this.data.getWeatherData().subscribe({
//       next: (res) => {
//         this.cities = res;
//         this.filteredCities = res; // Initialize filteredCities with all cities
//         console.log(res);
//       }
//     })
//   }

//   onClick(city: { name: string, temperature: number, condition: string, icon: string }) {
//     this.data.selectedCity.emit(city);
//     this.data.citySelected.emit(true);
//   }

//   toggleSearchInput() {
//     this.showSearch = !this.showSearch;
//     // if (!this.showSearch) {
//     //   // If search input is hidden, reset search query and filtered cities
//     //   // this.searchQuery = '';
//     //   // this.filteredCities = this.cities;
//     // }
//   }

//   filterCities() {
//     this.filteredCities = this.cities.filter(city =>
//       city.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//   }
// }


import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './app-city-selector.component.html',
  styleUrls: ['./app-city-selector.component.css']
})
export class AppCitySelectorComponent implements OnInit {
  cities: { name: string, temperature: number, condition: string, icon: string }[] = [];
  filteredCities: { name: string, temperature: number, condition: string, icon: string }[] = [];
  showSearch: boolean = false;
  searchQuery: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getWeatherData().subscribe({
      next: (res) => {
        this.cities = res;
        this.filteredCities = res; // Initialize filteredCities with all cities
        console.log(res);
      }
    })
  }

  onClick(city: { name: string, temperature: number, condition: string, icon: string }) {
    this.data.selectedCity.emit(city);
    this.data.citySelected.emit(true);
  }

  toggleSearchInput() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      // If search input is hidden, reset search query and filtered cities
      this.searchQuery = '';
      this.filteredCities = this.cities;
    }
  }

  filterCities() {
    this.filteredCities = this.cities
      .filter(city =>
        city.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
}
