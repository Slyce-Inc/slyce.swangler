import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppEndPoint} from './models/endpoint/endpoint.model';
import {SwaggerService} from './services/swagger.service';
import {APPENDPOINT} from './models/MOCK_DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sortedApiData: Observable<any> = this.swaggerService.getEndpointsSortedByTags();
  apiData;

  public appEndPoint: AppEndPoint = JSON.parse(JSON.stringify(APPENDPOINT));
  public options = {
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: false,
    position: ['bottom', 'right']
};

  constructor(private swaggerService: SwaggerService) {
  }

  ngOnInit() {
    this.swaggerService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }

}
