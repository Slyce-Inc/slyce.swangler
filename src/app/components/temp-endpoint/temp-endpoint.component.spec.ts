import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempEndpointComponent } from './temp-endpoint.component';

describe('TempEndpointComponent', () => {
  let component: TempEndpointComponent;
  let fixture: ComponentFixture<TempEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
