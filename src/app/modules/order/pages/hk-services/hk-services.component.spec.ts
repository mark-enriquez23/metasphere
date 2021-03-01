import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkServicesComponent } from './hk-services.component';

describe('HkServicesComponent', () => {
  let component: HkServicesComponent;
  let fixture: ComponentFixture<HkServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
