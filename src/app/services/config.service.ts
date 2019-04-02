import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<any> {
    return this.http.get('/assets/configs/main.json').delay(1000);
  }

}
