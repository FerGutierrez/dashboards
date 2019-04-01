import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { dashboardReducers } from './dashboard.reducers';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    dashboards: dashboardReducers,
    config: configReducers
};
