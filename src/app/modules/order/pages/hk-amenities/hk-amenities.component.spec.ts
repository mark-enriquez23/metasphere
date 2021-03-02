import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkAmenitiesComponent } from './hk-amenities.component';

describe('HkAmenitiesComponent', () => {
  let component: HkAmenitiesComponent;
  let fixture: ComponentFixture<HkAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkAmenitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
