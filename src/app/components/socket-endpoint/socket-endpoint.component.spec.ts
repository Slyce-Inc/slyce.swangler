import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketEndpointComponent } from './socket-endpoint.component';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppEndPoint } from '../../models/endpoint/endpoint.model';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';
import { NotificationsService } from 'angular2-notifications';
import { By } from '@angular/platform-browser';
import { APPENDPOINT } from '../../models/MOCK_DATA';
import { SocketService } from '../../services/socket/socket-service.service';

const SocketServiceStub = {
  connect: () => {}
};

fdescribe('SocketEndpointComponent', () => {

  @Component({
    selector: 'app-example-side-bar',
    template: '<span></span>'
  })
  class ExampleSideBarComponent {
    @Input('endpoint') endpoint: AppEndPoint;
    @Output('clickedBodySample') clickedBodySample: EventEmitter<any> = new EventEmitter();
  }
  let component: SocketEndpointComponent;
  let fixture: ComponentFixture<SocketEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocketEndpointComponent,
        ExampleSideBarComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        EndpointsSharedService,
        NotificationsService,
        { provide: SocketService, useValue: SocketServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketEndpointComponent);
    component = fixture.componentInstance;
    component.endpointData = JSON.parse(JSON.stringify(APPENDPOINT));
    this.endpointsSharedService = TestBed.get(EndpointsSharedService);
    fixture.detectChanges();
  });
  it('should check if smoothScroll is called without failure', () => {
    component.smoothScroll(1, 1000);
    component.smoothScroll(1000, 1);
  });
});
