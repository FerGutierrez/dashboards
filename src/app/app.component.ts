import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IAppState } from './store/state/app.state';
import { selectConfig, selectConfigLoading, selectConfigError } from './store/selectors/config.selector';
import { GetConfig } from './store/actions/config.actions';
import { GetDashboards } from './store/actions/dashboard.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading$ = this.store.select(selectConfigLoading);
  selectConfigSubscription: Subscription;
  selectConfigErrorSubscription: Subscription;

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());

    this.selectConfigSubscription = this.store.select(selectConfig)
      .subscribe((config) => {
        const payload = config && config.dashboards ? config.dashboards : [];
        this.store.dispatch(new GetDashboards(payload));
      });

    this.selectConfigErrorSubscription = this.store.select(selectConfigError)
      .subscribe((error) => {
        if (error) {
          this.router.navigate(['error']);
        }
      });
  }
  
  ngOnDestroy() {
    this.selectConfigSubscription.unsubscribe();
    this.selectConfigErrorSubscription.unsubscribe();
  }
}
