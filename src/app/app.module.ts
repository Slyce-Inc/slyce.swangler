import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';
import { AuthComponent } from './components/auth-component/auth-component.controller';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {SampleViewComponent} from './views/sample/sample.controller';
import {AppRoutingModule} from './app-routing.module';
import { CollapsableNavComponent } from './components/collapsable-nav/collapsable-nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { ParamConsoleComponent } from './components/param-console/param-console.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import {MainViewComponent} from './views/main/main.component';
import { ExampleCollapsibleComponent } from './components/example-collapsible/example-collapsible.component';
import {ExampleSideBarComponent} from './components/example-side-bar/example-side-bar.component';
import {EndpointsViewComponent} from './views/endpoints-view/endpoints-view.component';
import { EndpointsSharedService } from './services/endpoints-shared.service';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageBytesService } from './services/image-bytes.service';
import { SocketService } from './services/socket/socket.service';
import {CommonModule} from '@angular/common';
import { GetIndexPipe } from './pipes/get-index.pipe';
import {AltInputModule} from './components/alt-input/altInput.module';
import { JsonFormatDirective } from './directives/json-format.directive';
import {ConfigService} from './services/config-service/config.service';
import { SharedVarsService } from './services/shared-vars.service';
import { RestEndpointComponent } from './components/endpoint/rest-endpoint/rest-endpoint.component';
import {SocketEndpointComponent} from './components/endpoint/socket-endpoint/socket-endpoint.component';
import { ClipboardService } from './services/clipboard.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    ContactComponent,
    AuthComponent,
    SampleViewComponent,
    AppComponent,
    CollapsableNavComponent,
    SidebarNavComponent,
    ExampleCollapsibleComponent,
    ParamConsoleComponent,
    SidebarNavComponent,
    CollapsableNavComponent,
    ExampleSideBarComponent,
    MainViewComponent,
    EndpointsViewComponent,
    SocketEndpointComponent,
    GetIndexPipe,
    JsonFormatDirective,
    RestEndpointComponent
  ],
  imports: [
    AltInputModule,
    BrowserModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    SharedVarsService,
    ConfigService,
    SwaggerService,
    LocalStorageService,
    EndpointsSharedService,
    ImageBytesService,
    SocketService,
    ClipboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
