import {
  Component,
  OnInit
} from '@angular/core';
import {
  SwaggerService
} from '../../services/swagger.service';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {APPENDPOINT} from '../../models/MOCK_DATA';


@Component({
  selector: 'app-sample-view',
  templateUrl: './sample.view.html'
})

export class SampleViewComponent {
  public swaggerData = {};
  public endPointData: AppEndPoint = APPENDPOINT as AppEndPoint;
  constructor(public swagger: SwaggerService) {
    this.swagger.getEndpointsSortedByTags().subscribe(res => {
      this.swaggerData = res;
    });
  }
  public clickTest(test) {
    console.log(test);
  }

}
