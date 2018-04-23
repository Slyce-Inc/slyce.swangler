import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EndpointsViewComponent } from './views/endpoints-view/endpoints-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';


const routes: Routes = [
  { path: '', component: LoginViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: ':endpointTag', component: EndpointsViewComponent, },
  { path: ':endpointTag/:endpointId', component: EndpointsViewComponent, },
  { path: '**', component: EndpointsViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
