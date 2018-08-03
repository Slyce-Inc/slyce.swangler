import { AfterViewInit, Component, OnDestroy, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as hl from '../../../../node_modules/highlight.js/';
import { RequestInitiator } from '../../models/endpoint/endpoint.model';
import { AccountService } from '../../services/account/account.service';
import { ClipboardService } from '../../services/clipboard.service';
import { ConfigService } from '../../services/config-service/config.service';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { SharedVarsService } from '../../services/shared-vars.service';
import { SwaggerService } from '../../services/swagger.service';


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
  hideRestrictedEndpoints: boolean;
  endpointsComponentsLoaded = 0;
  scrolledToEndpointId;

  public result = {
    header: null,
    method: null,
    url: null,
    responseBody: null,
    responseBodyJson: null,
    responseCode: null,
    websocket: null
  };

  endpointId = null;

  constructor(
    private route: ActivatedRoute,
    public swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    public notify: NotificationsService,
    public configService: ConfigService,
    public sharedVarsService: SharedVarsService,
    public clipboardService: ClipboardService,
    public accountService: AccountService,
    public endpointsSharedService: EndpointsSharedService,
    public router: Router
  ) {}

  ngOnInit() {
    this.configService.initConfigService().then(config => {
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

    this.swaggerService.getApiData().subscribe(data => {
      this.apiData = data;
    });

    this.endpointsSharedService.onHiddenTagsChange().subscribe((hiddenTags: String[]) => {
      if (hiddenTags.indexOf(this.endpointTag) !== -1) {
        const availableTag = this.findNextAllowedTag();
        this.router.navigate([availableTag]);
      }
    });

    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];

      this.updateEndpoints();
    });

    this.queryParamSubscription = this.route.queryParams.subscribe(queryParams => {
      if (queryParams.enpt) {
        this.endpointId = queryParams.enpt;
        this.scrollToElem(this.endpointId);
      }
    });
  }

  findNextAllowedTag() {
    const endpoints = this.swaggerService.endpoints;

    for (const key in endpoints) {
      if (endpoints.hasOwnProperty(key)) {
        const tag = endpoints[key];
        const restrictedEndpoints = [];
        tag.forEach(endpoint => {
          if (endpoint.restricted) {
            restrictedEndpoints.push(true);
          }
        });
        if (tag.length > restrictedEndpoints.length) {
          return tag[0].tags[0];
        }
      }
    }
  }

  updateEndpoints() {
    this.swaggerService.getEndpointsSortedByTags().subscribe(data => {
      if (data) {
        if (this.endpointTag) {
          if (data[this.endpointTag]) {
            this.endpoints = data[this.endpointTag];
            this.clearScrolled();
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
    this.clearRes();
    this.swaggerService.testEndpoint(requestInitiator).subscribe(res => {
      this.setRes(res, request);
      modal.show();
    }, error => {
      this.setRes(error, request);
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
  clearRes() {
    this.result['header'] = '';
    this.result['method'] = '';
    this.result['url'] = '';
    this.result['responseBody'] = '';
    this.result['responseBodyJson'] = '';
    this.result['responseCode'] = '';
    this.result['responseHeader'] = '';
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

  copyRawResponse(json, event) {
    // event element needed in order to append a hidden textarea to it and avoid page jumping
    this.clipboardService.writeToClipboard(json, event.srcElement);
  }

  onToggleFilteredEndpoints(event) {
    this.hideRestrictedEndpoints = event;
  }

  handleClickedNavLink(e) {
     this.scrollToElem(e);
  }

  clearScrolled() {
    this.endpointsComponentsLoaded = 0;
    this.scrolledToEndpointId = false;
  }

  handleRenderedEndpointComponent(endpointId) {
    this.endpointsComponentsLoaded++;
    if (endpointId === this.endpointId) {
      this.scrolledToEndpointId = true;
      this.scrollToElem(endpointId);
    }
    if (this.endpointsComponentsLoaded === this.endpoints.length && !this.scrolledToEndpointId) {
      this.scrollToElem();
    }
  }

  public scrollToElem(id?: string) {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo(0, elem.offsetTop + 40);
    } else {
      window.scrollTo(0, 40);
    }
  }
}
