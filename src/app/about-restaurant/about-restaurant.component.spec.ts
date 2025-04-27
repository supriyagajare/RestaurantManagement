import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRestaurantComponent } from './about-restaurant.component';

describe('AboutRestaurantComponent', () => {
  let component: AboutRestaurantComponent;
  let fixture: ComponentFixture<AboutRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRestaurantComponent]
    });
    fixture = TestBed.createComponent(AboutRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
