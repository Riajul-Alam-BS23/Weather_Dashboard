import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeatherDisplayComponent } from './app-weather-display.component';

describe('AppWeatherDisplayComponent', () => {
  let component: AppWeatherDisplayComponent;
  let fixture: ComponentFixture<AppWeatherDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppWeatherDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppWeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
