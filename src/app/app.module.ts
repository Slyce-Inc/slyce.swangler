import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';

import {AuthComponent} from './components/authComponent/authComponent.controller';
import { LocalStorageService } from './services/local-storage.service';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import {SampleViewComponent} from './views/sample/sample.controller';
import {AppRoutingModule} from './app-routing.module';

import { CollapsableNavComponent } from './components/collapsable-nav/collapsable-nav.component';

import { ContactComponent } from './components/contact/contact.component';
import {HttpResModal} from './components/httpResModalComponent/httpResModal.controller';
import {ParamConsoleComponent} from './components/param-console/param-console.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import {ExampleCollapsibleComponent} from "./components/example-collapsible/example-collapsible.component";
import {MainViewComponent} from './views/main/main.component';
import {EndpointComponent} from "./components/endpoint/endpoint.component";

@NgModule({
  declarations: [
    ContactComponent,
    AuthComponent,
    SampleViewComponent,
    HttpResModal,
    AppComponent,
    CollapsableNavComponent,
    SidebarNavComponent,
    ExampleCollapsibleComponent,
    ParamConsoleComponent,
    SidebarNavComponent,
    CollapsableNavComponent,
    MainViewComponent,
    EndpointComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [SwaggerService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
