import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppEndPoint, Endpoint, Schema} from '../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-example-side-bar',
  templateUrl: './example-side-bar.component.html',
  styleUrls: ['./example-side-bar.component.scss']
})
export class ExampleSideBarComponent implements OnInit {
  @Input() endpoint: Endpoint | any;
  // If provided, show the Request message with index value, otherwise show all, if invalid index show none
  @Input() showRequestMessageOfIndex: number = null;
  @Output() clickedBodySample: EventEmitter<any> = new EventEmitter();
  public requestSchema: Schema;
  public responseSchema: Schema;
  ngOnInit() {
    this.initializeRestEndPoint();
  }
  public initializeRestEndPoint() {
    if (this.endpoint.parameters !== null) {
      this.endpoint.parameters.forEach(p => {
        if (p.in.toLowerCase() === 'body') {
          this.requestSchema = p.schema;
        }
      });
    }
    const endpoint: AppEndPoint = this.endpoint as AppEndPoint;
    if (endpoint.responses && endpoint.responses['200'] && endpoint.responses['200'].schema) {
      this.responseSchema = endpoint.responses['200'].schema;
    }
  }
  /**
   * Check if the array exist and if it is filled with anything
   * @param array
   * @returns {boolean}
   */
  public _isArray(array) {
    if (array && array.length > 0) {
      return( true );
    } else {
      return( false );
    }
  }
}
