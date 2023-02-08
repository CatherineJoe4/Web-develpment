import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehengasComponent } from './lehengas.component';

describe('LehengasComponent', () => {
  let component: LehengasComponent;
  let fixture: ComponentFixture<LehengasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehengasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LehengasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
