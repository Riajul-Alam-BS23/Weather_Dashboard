import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCitySelectorComponent } from './app-city-selector.component';

describe('AppCitySelectorComponent', () => {
  let component: AppCitySelectorComponent;
  let fixture: ComponentFixture<AppCitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCitySelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
