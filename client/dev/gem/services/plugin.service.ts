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
  static ENDPOINT: string = '/plugin/:text';

  constructor(@Inject(Http) private http: Http) {

  }

  get(text: string):Observable<any> {
    return this.http
               .get(PluginService.ENDPOINT.replace(':text', text))
               .map((res) => res!=null ? JSON.parse(res.text()) : null);
  }

  add(plugin):Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http
               .post(PluginService.ENDPOINT.replace(':id', ''), JSON.stringify(plugin), {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this.http
               .delete(PluginService.ENDPOINT.replace(':id', id));
  }
}
