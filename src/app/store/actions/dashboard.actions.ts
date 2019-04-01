import { Action } from '@ngrx/store';
import { IChart } from '../../models/chart.interface';
import { IDashboard } from '../../models/dashboard.interface';

export const DASHBOARD_ACTIONS = {
    GET: '[Dashboard] Get Dashboards',
    EDIT_NEW: '[Dashboard] Edit New Dashboard',
    CREATE: '[Dashboard] Create Dashboard',
    ADD_CHART: '[Dashboard] Add Chart'
};

export class GetDashboards implements Action {
    readonly type = DASHBOARD_ACTIONS.GET;
    constructor (public payload: IDashboard[]) {}
}

export class EditNewDashboard implements Action {
    readonly type = DASHBOARD_ACTIONS.EDIT_NEW;
    constructor (public payload?: any) {}
}

export class CreateDashboard implements Action {
    readonly type = DASHBOARD_ACTIONS.CREATE;
    constructor (public payload: string) {}
}

export class AddChart implements Action {
    readonly type = DASHBOARD_ACTIONS.ADD_CHART;
    constructor (public payload: IChart) {}
}

export type DashboardAction
    = GetDashboards
    | EditNewDashboard
    | CreateDashboard
    | AddChart;
