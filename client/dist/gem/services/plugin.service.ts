import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PluginService {
  static ENDPOINT: string = '/api/gem/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    return this._http
               .get(PluginService.ENDPOINT.replace(':id', ''))
               .map((r) => r!=null ? r.json() : "");
  }

  add(message:string):Observable<any> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(PluginService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
               .delete(PluginService.ENDPOINT.replace(':id', id));
  }
}
