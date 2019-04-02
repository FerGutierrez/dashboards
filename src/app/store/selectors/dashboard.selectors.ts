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

/*
export const selectDashboard = createSelector(
    selectDashboards,
    (state: IDashboardState, id: number) => {
        return state.dashboards.find((dashboard) => dashboard.id === id);
    }
);
*/
