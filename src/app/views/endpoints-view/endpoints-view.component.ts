import {Component, OnInit, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SwaggerService} from '../../services/swagger.service';
import {Observable} from 'rxjs/Observable';
import {RequestInitiator} from '../../models/endpoint/endpoint.model';
import {LocalStorageService} from '../../services/local-storage.service';
import * as hl from '../../../../node_modules/highlight.js/';
import { NotificationsService } from 'angular2-notifications';
import {ConfigService} from '../../services/config-service/config.service';
import { SharedVarsService } from '../../services/shared-vars.service';

@Component({
  selector: 'app-endpoints-view',
  templateUrl: './endpoints-view.component.html',
  styleUrls: ['./endpoints-view.component.scss']
})
export class EndpointsViewComponent implements OnInit, OnDestroy {
  wrongTag = false;
  endpointTag: string;
  endpoints;
  scrollToId: string = null;
  paramSubscription: Subscription;
  queryParamSubscription: Subscription;
  sortedApiData: Observable < any > = this.swaggerService.getEndpointsSortedByTags();
  apiData;
  public result = {};

  constructor(
    private route: ActivatedRoute,
    public swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    public notify: NotificationsService,
    public configService: ConfigService,
    public sharedVarsService: SharedVarsService
  ) {}

  ngOnInit() {
    this.configService.initConfigService().then( config => {
      this.swaggerService.initSwagger(config.spec, config.websocket_spec)
        .then((endpoints) => {
          if (endpoints) {
            this.sharedVarsService.initSharedVars(endpoints);
          }
        });
    }, error => {
      this.notify.error(error.message);
      throw error;
    });
    this.queryParamSubscription = this.route.queryParams.subscribe(queryParams => {
      if (queryParams.enpt) {
        this.scrollToId = queryParams.enpt;
      }
    });

    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];
      this.updateEndpoints();
    });
    this.swaggerService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }

  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe(data => {
      if (data) {
        if (this.endpointTag) {
          if (data[this.endpointTag]) {
            this.endpoints = data[this.endpointTag];
            this.wrongTag = false;
          } else {
            this.wrongTag = true;
            this.notify.error('Error', 'No data for ' + this.endpointTag);
          }
        } else {
          this.endpoints = data[Object.keys(data)[0]];
        }

      }
    });
  }

  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }

  clickTest(request, modal) {
    this.result['websocket'] = false;

    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe( res => {
      this.setRes(res, request);

      modal.show();
    }, error => {
      this.setRes(error, request);
      this.result['responseBody'] = this.highlightJSInJson(error.error);
      this.result['responseBodyJson'] = error.error;
      modal.show();
    });
  }

  showSocketMessages(socketData, modal) {
    this.setSocketRes(JSON.parse(JSON.stringify(socketData)));
    this.result['websocket'] = true;
    modal.show();
  }

  setSocketRes(res) {
    for (let i = 0; i < res.messages.length; i++) {
      const message = res.messages[i];
      message.response = message.response;
    }
    this.result = res;
  }

  setRes(res, request) {
    this.result['header'] = request.endPointData.summary;
    this.result['method'] = request.endPointData.method;
    this.result['url'] = res.url ? decodeURIComponent(res.url) : 'No URL Present';
    this.result['responseBody'] = res.body ? this.highlightJSInJson(res.body) : this.highlightJSInJson(res);
    this.result['responseBodyJson'] = res.body ? res.body : res;
    this.result['responseCode'] = res.status || 'No code Present';
    if (res.headers && res.headers.keys) {
      const keys = res.headers.keys();
      res.headers = keys.map(key =>
        `${key}: ${res.headers.get(key)}`);
    }
    this.result['responseHeader'] = this.highlightJSInJson(res.headers) || 'No Headers Present';
  }
  highlightJSInJson(obj): string {
    if (obj) {
      return (hl.highlight('json', JSON.stringify(obj, null, 4)).value);
    }
  }
}
