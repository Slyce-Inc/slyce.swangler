import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';

import {AuthComponent} from './components/authComponent/authComponent.controller';
import { LocalStorageService } from './services/local-storage.service';
import {FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import {SampleViewComponent} from './views/sample.controller';
import {AppRoutingModule} from './app-routing.module';

import { CollapsableNavComponent } from './components/collapsable-nav/collapsable-nav.component';

import { ContactComponent } from './components/contact/contact.component';
import {HttpResModal} from './components/httpResModalComponent/httpResModal.controller';
import {ParamConsoleComponent} from './components/param-console/param-console.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';

@NgModule({
  declarations: [
    ContactComponent,
    AuthComponent,
    SampleViewComponent,
    HttpResModal,
    AppComponent,
    CollapsableNavComponent,
    SidebarNavComponent,
    ParamConsoleComponent,
    SidebarNavComponent,
    CollapsableNavComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [SwaggerService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
