import {Component, OnInit, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SwaggerService} from '../../services/swagger.service';
import {Observable} from 'rxjs/Observable';
import {RequestInitiator} from '../../models/endpoint/endpoint.model';
import {LocalStorageService} from '../../services/local-storage.service';
import * as hl from '../../../../node_modules/highlight.js/';
import { NotificationsService } from 'angular2-notifications';
import {ConfigService} from '../../services/config-service/config.service';
import { SharedVarsService } from '../../services/shared-vars.service';
import { ClipboardService } from '../../services/clipboard.service';
import { AccountService } from '../../services/account/account.service';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';
import { Router } from '@angular/router';


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

  public result = {
    header: null,
    method: null,
    url: null,
    responseBody: null,
    responseBodyJson: null,
    responseCode: null,
    websocket: null
  };

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
  ) {

  }

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

    this.router.events.subscribe(res => {
      if (res.constructor === NavigationEnd) {
        setTimeout(() => {
            this.scrollToElem(this.route.snapshot.queryParams['enpt']);
          }, 33
        );
      }
    })
    this.queryParamSubscription = this.route.queryParams.subscribe(queryParams => {
      if (queryParams.enpt) {
        this.scrollToElem(queryParams.enpt);
      } else {
        this.scrollToElem();
      }
    });

    this.paramSubscription = this.route.params.subscribe(params => {
      this.endpointTag = params['endpointTag'];

      this.updateEndpoints();
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
  }

  findNextAllowedTag() {
    const endpoints = this.swaggerService.endpoints;

    for (const key in endpoints) {
      if (endpoints.hasOwnProperty(key)) {
        const tag = endpoints[key];
        const restrictedEndpoints = [];
        tag.forEach(endpoint => {
          if (endpoint.restricted) { restrictedEndpoints.push(true); }
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

  copyRawResponse(json, event) {
    // event element needed in order to append a hidden textarea to it and avoid page jumping
    this.clipboardService.writeToClipboard(json, event.srcElement);
  }

  onToggleFilteredEndpoints(event) {
    this.hideRestrictedEndpoints = event;
  }
  public scrollToElem(id?: string) {
    if ( id ) {
      const elem = document.getElementById(id);
      if (elem) {
        window.scrollTo(0, elem.offsetTop + 40);
      }
    } else {
      window.scrollTo(0, 40);
    }
  }
}
