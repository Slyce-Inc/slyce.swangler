import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageBytesService} from '../../../services/image-bytes.service';
import {AltInputEventModel} from '../model/AltInputEvent.model';
import {AltFileUploadComponent} from '../alt-file-upload/alt-file-upload.component';

@Component({
  selector: 'app-alt-imagefile-upload',
  templateUrl: './alt-imagefile-upload.component.html',
  styleUrls: ['./alt-imagefile-upload.component.scss']
})
export class AltImageFileUploadComponent extends AltFileUploadComponent implements OnInit {
  constructor(public imageBytesService: ImageBytesService) {
    super();
  }
  ngOnInit() {
  }
  public onChangeAction($event) {
    this.hasContent = true;
    this.imageBytesService.getImageBytes($event.target)
      .subscribe(bytes => {
        this.event.emit(new AltInputEventModel(AltInputEventModel.EVENT_TYPES.DATA, bytes.toString()));
      });
  }
}
