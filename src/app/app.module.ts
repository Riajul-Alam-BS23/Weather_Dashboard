import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppCitySelectorComponent } from './app-city-selector/app-city-selector.component';
import { AppWeatherDisplayComponent } from './app-weather-display/app-weather-display.component';
import {  HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppWeatherIconComponent } from './app-weather-icon/app-weather-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCitySelectorComponent,
    AppWeatherDisplayComponent,
    DropdownDirective,
    AppWeatherIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
