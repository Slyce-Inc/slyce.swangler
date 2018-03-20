import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltInputComponent } from './alt-input.component';

describe('AltInputComponent', () => {
  let component: AltInputComponent;
  let fixture: ComponentFixture<AltInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
