import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint, Endpoint, Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-side-bar',
  templateUrl: './example-side-bar.component.html',
  styleUrls: ['./example-side-bar.component.scss']
})
export class ExampleSideBarComponent implements OnInit {
  @Input('endpoint') endpoint: Endpoint;
  @Output('clickedBodySample') clickedBodySample: EventEmitter<any> = new EventEmitter();

  public requestSchema: Schema;
  public responseSchema: Schema;
  ngOnInit() {
    if (this.endpoint.parameters !== null) {
      this.endpoint.parameters.forEach(p => {
        if ( p.in.toLowerCase() === 'body') {
          this.requestSchema = p.schema;
        }
      });
    }
    const endpoint: AppEndPoint = this.endpoint as AppEndPoint;
    if ( endpoint.responses && endpoint.responses['200'] && endpoint.responses['200'].schema) {
      this.responseSchema = endpoint.responses['200'].schema;
    }
  }

}
