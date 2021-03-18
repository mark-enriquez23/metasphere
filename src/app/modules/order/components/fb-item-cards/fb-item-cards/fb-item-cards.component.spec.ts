import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemCardsComponent } from './fb-item-cards.component';

describe('FbItemCardsComponent', () => {
  let component: FbItemCardsComponent;
  let fixture: ComponentFixture<FbItemCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbItemCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbItemCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
