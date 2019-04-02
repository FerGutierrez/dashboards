import { Injectable, MissingTranslationStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  constructor(private _http: HttpClient) { }

  fetch(): Observable<any> {
    return this._http.get('/assets/configs/main.json').delay(1000);
  }

}
