import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkNavHeaderComponent } from './hk-nav-header.component';

describe('HkNavHeaderComponent', () => {
  let component: HkNavHeaderComponent;
  let fixture: ComponentFixture<HkNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
