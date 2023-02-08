import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrocksComponent } from './frocks.component';

describe('FrocksComponent', () => {
  let component: FrocksComponent;
  let fixture: ComponentFixture<FrocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
