import { createSelector } from '@ngrx/store';

import { IDashboardState } from '../state/dashboard.state';
import { IAppState } from '../state/app.state';

const selectDashboards = (state: IAppState) => state.dashboards;

export const selectDashboardList = createSelector(
    selectDashboards,
    (state: IDashboardState) => state.dashboards
);

export const selectCreatingDashboard = createSelector(
    selectDashboards,
    (state: IDashboardState) => state.creatingDashboard
);
