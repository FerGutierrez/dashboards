import { IDashboardState, initialDashboardState } from './dashboard.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState {
    dashboards: IDashboardState;
    config: IConfigState;
}

export const initialAppState: IAppState = {
    dashboards: initialDashboardState,
    config: initialConfigState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
