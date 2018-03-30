import {Component, OnInit, ViewChild} from '@angular/core';
import {AltInputEventModel} from '../model/AltInputEvent.model';
import {AltInputComponent} from '../alt-input.component';

@Component({
  selector: 'app-alt-file-upload',
  templateUrl: './alt-file-upload.component.html',
  styleUrls: ['./alt-file-upload.component.scss']
})
export class AltFileUploadComponent extends AltInputComponent implements OnInit {
  public hasContent = false;
  @ViewChild('fileInput') fileInput;
  constructor() {
    super();
  }
  ngOnInit() {
  }
  public onChangeAction(event) {
    const fileInput: HTMLInputElement = event.target;
    const file = fileInput.files[0];
    const fileReader = new FileReader();
    const that = this;
    if (fileReader && file) {
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = function () {
        const fileData = fileReader.result;
        that.hasContent = true;
        that.event.emit(new AltInputEventModel(AltInputEventModel.EVENT_TYPES.DATA, fileData));
      };
    }
  }
  public clearInput() {
    this.fileInput.nativeElement.value = '';
    this.hasContent = false;
    this.event.emit(new AltInputEventModel(AltInputEventModel.EVENT_TYPES.DELETE));
  }
  public applyButtonClicked() {
    this.event.emit(new AltInputEventModel(AltInputEventModel.EVENT_TYPES.APPLY));
  }
}
