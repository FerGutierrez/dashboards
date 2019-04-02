import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { selectConfig, selectConfigLoading, selectConfigError } from './store/selectors/config.selector';
import { GetConfig } from './store/actions/config.actions';
import { GetDashboards } from './store/actions/dashboard.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$ = this.store.select(selectConfigLoading);

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
    
    this.store.select(selectConfig)
      .subscribe((config) => {
        const payload = config && config.dashboards ? config.dashboards : [];
        this.store.dispatch(new GetDashboards(payload));
      });

    this.store.select(selectConfigError)
      .subscribe((error) => console.log(error)); // this.router.navigate(['error']));
  }
}
