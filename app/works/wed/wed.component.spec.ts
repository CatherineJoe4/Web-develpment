import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedComponent } from './wed.component';

describe('WedComponent', () => {
  let component: WedComponent;
  let fixture: ComponentFixture<WedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
