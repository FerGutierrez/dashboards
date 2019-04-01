import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { selectConfig, selectConfigLoading, selectConfigError } from './store/selectors/config.selector';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config$ = this.store.select(selectConfig);
  loading$ = this.store.select(selectConfigLoading);
  error$ = this.store.select(selectConfigError);

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }
}
