// import angular from 'angular';
// // import ngAnimate from 'angular-animate';
// import ngCookies from 'angular-cookies';
// import ngResource from 'angular-resource';
// import ngSanitize from 'angular-sanitize';
//
//
//// import uiRouter from 'angular-ui-router';
//
// // import ngMessages from 'angular-messages';
//

// import {routeConfig} from './app.config';

//
// import navbar from '../components/navbar/navbar.component';
// import footer from '../components/footer/footer.component';
// import main from './main/main.component';
// import constants from './app.constants';
// import util from '../components/util/util.module';
//

//   .config(routeConfig)
//;


import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { DirectivesModule } from '../components/directives.module';
import { AccountModule } from './account/account.module';
// import { AdminModule } from './admin/admin.module';

import constants from './app.constants';

let providers = [provideAuth({
  // Allow using AuthHttp while not logged in
  noJwtError: true
})];

if(constants.env === 'development') {
  @Injectable()
  class HttpOptions extends BaseRequestOptions {
    merge(options /*:RequestOptionsArgs*/) /*:RequestOptions*/{
      options.url = `http://localhost:9000${options.url}`;
      return super.merge(options);
    }
  }

  providers.push({ provide: RequestOptions, useClass: HttpOptions });
}

export let AppModule = @NgModule({
  providers,
  imports : [BrowserModule, HttpModule, UIRouterModule.forRoot(), MainModule, DirectivesModule, AccountModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
class AppModule {};
