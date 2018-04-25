import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { CollapsableNavEndpointsModel } from '../../models/sidebar/collapsable-nav.model';

@Component({
  selector: 'app-collapsable-nav',
  templateUrl: './collapsable-nav.component.html',
  styleUrls: ['./collapsable-nav.component.scss']
})
export class CollapsableNavComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() tag: string;
  @Input() sectionToExpand: string = null;
  @Input() endpoints: Array<CollapsableNavEndpointsModel>;
  @Input() hideRestrictedEndpoints: boolean;

  hideSideTag: boolean;

  Object = null;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
    this.Object = Object;
  }

  toggleExpand(event) {
    if (!event.target.classList.value.includes('navigate-to-tag')) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  ngAfterContentInit() {
    if ( this.tag === this.sectionToExpand ) {
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

    if (changes.hideRestrictedEndpoints) {
      if (changes.hideRestrictedEndpoints.currentValue === true && this.allEndpointsRestricted()) {
        this.hideSideTag = true;
      } else if (this.hideSideTag === true) {
        this.hideSideTag = false;
      }
    }
  }

  getNavLinkName(endpointObj) {
    if (endpointObj.summary) {
      return(endpointObj.summary);
    } else if (endpointObj.operationId) {
      return (endpointObj.operationId);
    } else if (endpointObj.url) {
      return(endpointObj.url);
    } else {
      return('No Name');
    }
  }

  allEndpointsRestricted() {
    const restricted = [];
    this.endpoints.forEach((endpoint, i) => {
      restricted.push(endpoint.restricted);
    });
    return restricted.indexOf(true) !== -1;
  }

}

