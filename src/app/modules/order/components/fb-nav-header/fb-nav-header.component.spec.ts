import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbNavHeaderComponent } from './fb-nav-header.component';

describe('FbNavHeaderComponent', () => {
  let component: FbNavHeaderComponent;
  let fixture: ComponentFixture<FbNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
