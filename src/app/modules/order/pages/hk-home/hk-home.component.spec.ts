import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkHomeComponent } from './hk-home.component';

describe('HkHomeComponent', () => {
  let component: HkHomeComponent;
  let fixture: ComponentFixture<HkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
