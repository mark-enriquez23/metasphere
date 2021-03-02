import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDrinksComponent } from './fb-drinks.component';

describe('FbDrinksComponent', () => {
  let component: FbDrinksComponent;
  let fixture: ComponentFixture<FbDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
