import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlousesComponent } from './blouses.component';

describe('BlousesComponent', () => {
  let component: BlousesComponent;
  let fixture: ComponentFixture<BlousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
