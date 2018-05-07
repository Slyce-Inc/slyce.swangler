import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  CollapsableNavEndpointsModel
} from '../../models/sidebar/collapsable-nav.model';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';

@Component({
  selector: 'app-collapsable-nav',
  templateUrl: './collapsable-nav.component.html',
  styleUrls: ['./collapsable-nav.component.scss']
})
export class CollapsableNavComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() tag: string;
  @Input() sectionToExpand: string = null;
  @Input() endpoints: Array <CollapsableNavEndpointsModel> ;
  @Output() navClicked: EventEmitter<any> = new EventEmitter<any>();
  hideRestrictedEndpoints: boolean;

  hideSideTag: boolean;

  Object = null;
  isCollapsed = true;

  constructor(
    public endpointsSharedService: EndpointsSharedService
  ) {}

  ngOnInit() {
    this.Object = Object;

    this.endpointsSharedService.onRestrictedEndpointsVisibilityChange().subscribe((value: boolean) => {
      this.hideRestrictedEndpoints = value;

      if (value && this.allEndpointsRestricted()) {
        this.hideSideTag = true;
        this.endpointsSharedService.addHiddenTag(this.tag);
      } else if (this.hideSideTag === true) {
        this.hideSideTag = false;
      }
    });
  }

  toggleExpand(event) {
    if (!event.target.classList.value.includes('navigate-to-tag')) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  ngAfterContentInit() {
    if (this.tag === this.sectionToExpand) {
      this.isCollapsed = false;

    } else {
      this.isCollapsed = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sectionToExpand) {
      this.isCollapsed = true;

      if (this.tag === changes.sectionToExpand.currentValue) {
        this.isCollapsed = false;
      }
    }
  }

  getNavLinkName(endpointObj) {
    if (endpointObj.summary) {
      return (endpointObj.summary);
    } else if (endpointObj.operationId) {
      return (endpointObj.operationId);
    } else if (endpointObj.url) {
      return (endpointObj.url);
    } else {
      return ('No Name');
    }
  }

  allEndpointsRestricted() {
    const restricted = [];
    this.endpoints.forEach((endpoint, i) => {
      restricted.push(endpoint.restricted || false);
    });

    return restricted.indexOf(false) === -1;
  }
}
