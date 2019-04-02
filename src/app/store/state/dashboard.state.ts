import { IDashboard } from '../../models/dashboard.interface';

export interface IDashboardState {
    dashboards: IDashboard[];
    creatingDashboard: boolean;
}

export const initialDashboardState: IDashboardState = {
    dashboards: [],
    creatingDashboard: false
};
