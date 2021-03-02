import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbFoodComponent } from './fb-food.component';

describe('FbFoodComponent', () => {
  let component: FbFoodComponent;
  let fixture: ComponentFixture<FbFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
