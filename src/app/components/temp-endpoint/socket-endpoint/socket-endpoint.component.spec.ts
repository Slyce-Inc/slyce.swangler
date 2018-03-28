import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketEndpointComponent } from './socket-endpoint.component';

describe('SocketEndpointComponent', () => {
  let component: SocketEndpointComponent;
  let fixture: ComponentFixture<SocketEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketEndpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
