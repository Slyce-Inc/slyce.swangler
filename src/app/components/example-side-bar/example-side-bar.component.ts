import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint, Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-side-bar',
  templateUrl: './example-side-bar.component.html',
  styleUrls: ['./example-side-bar.component.scss']
})
export class ExampleSideBarComponent implements OnInit {
  @Input('endpoint') endpoint: AppEndPoint;
  @Output('clickedBodySample') clickedBodySample: EventEmitter<any> = new EventEmitter();

  public bodySchema: Schema;
  public responseSchema: Schema;
  ngOnInit() {
    if (this.endpoint.parameters !== null) {
      this.endpoint.parameters.forEach(p => {
        if ( p.in.toLowerCase() === 'body') {
          this.bodySchema = p.schema;
        }
      });
    }
    if ( this.endpoint.responses && this.endpoint.responses['200'] && this.endpoint.responses['200'].schema) {
      this.responseSchema = this.endpoint.responses['200'].schema;
    }
  }

}
