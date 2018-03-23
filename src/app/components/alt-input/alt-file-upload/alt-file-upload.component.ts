import {Component, OnInit, ViewChild} from '@angular/core';
import {AltInputComponent} from '../alt-input.component';
import {ImageBytesService} from '../../../services/image-bytes.service';
import {AltInputEventModel} from '../model/AltInputEvent.model';

@Component({
  selector: 'app-alt-file-upload',
  templateUrl: './alt-file-upload.component.html',
  styleUrls: ['./alt-file-upload.component.scss']
})
export class AltFileUploadComponent extends AltInputComponent implements OnInit {
  public hasContent = false;
  @ViewChild('fileInput') fileInput;

  constructor(public imageBytesService: ImageBytesService) {
    super();
  }

  ngOnInit() {
  }
  public getBytes($event) {
    this.hasContent = true;
    this.imageBytesService.getImageBytes($event.target)
      .subscribe(bytes => {
        this.event.emit(new AltInputEventModel(AltInputEventModel.EVENT_TYPES.DATA, bytes.toString()));
      });
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
