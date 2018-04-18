import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigModel} from '../../models/config/config.model';

@Injectable()
export class ConfigService {
  public static CONFIG_LOCATION = 'assets/config.json';
  public static NO_CACHE_HEADER = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  };
  public config: ConfigModel = null;

  constructor(public http: HttpClient) {
    this.initConfigService();
  }
  public initConfigService(): Promise<ConfigModel> {
    if (!this.config) {
      return new Promise((resolve, reject) => {
        this.http.get(ConfigService.CONFIG_LOCATION, {
          'headers': new HttpHeaders(ConfigService.NO_CACHE_HEADER)
        }).subscribe( res => {
          this.config = res;
          resolve(this.config);
        }, error => {
          reject(error);
        });
      });
    } else {
      return Promise.resolve(this.config);
    }
  }
  public getConfig(): Promise<ConfigModel> {
    if (this.config) {
      return Promise.resolve(this.config);
    } else {
      return this.initConfigService();
    }
  }
}
