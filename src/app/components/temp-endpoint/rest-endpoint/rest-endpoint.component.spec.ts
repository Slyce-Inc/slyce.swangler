import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestEndpointComponent } from './rest-endpoint.component';

describe('RestEndpointComponent', () => {
  let component: RestEndpointComponent;
  let fixture: ComponentFixture<RestEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
