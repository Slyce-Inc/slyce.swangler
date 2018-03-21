import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AltInputEventModel} from './model/AltInputEvent.model';

@Component({
  selector: 'app-alt-input',
  templateUrl: './alt-input.component.html',
  styleUrls: ['./alt-input.component.scss']
})
export class AltInputComponent implements OnInit {
  public static TYPES = {
    STRING: 'string'
  };
  public static FORMATS = {
      BYTE: 'byte'
  };
  @Input('type') type: string;
  @Input('format') format: string;
  @Input('accept') accept?: string;
  @Input('header') header?: string;
  @Output('event') event?: EventEmitter<AltInputEventModel> = new EventEmitter<AltInputEventModel>();
  constructor() { }

  ngOnInit() {
  }

}
