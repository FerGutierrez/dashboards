import { initialDashboardState, IDashboardState } from '../state/dashboard.state';
import { DashboardAction, DASHBOARD_ACTIONS } from '../actions/dashboard.actions';
import { IDashboard } from '../../models/dashboard.interface';

export function dashboardReducers(
    state = initialDashboardState,
    action: DashboardAction
): IDashboardState {
    switch (action.type) {
        case DASHBOARD_ACTIONS.GET: {
            return {
                ...state,
                dashboards: action.payload
            };
        }

        case DASHBOARD_ACTIONS.EDIT_NEW: {
            return {
                ...state,
                creatingDashboard: true
            };
        }

        case DASHBOARD_ACTIONS.CREATE: {
            const newDashboard: IDashboard = {
                id: state.dashboards.length,
                name: action.payload,
                charts: []
            };

            return {
                ...state,
                dashboards: [ ...state.dashboards, newDashboard ],
                creatingDashboard: false
            };
        }

        case DASHBOARD_ACTIONS.ADD_CHART: {
            const dashboards = state.dashboards;
            const selectedDashboard = dashboards.find((dashboard) => dashboard.id === action.payload.dashboardId);

            if (!selectedDashboard) {
                return state;
            }

            selectedDashboard.charts.push(action.payload.chart);

            return {
                ...state,
                dashboards: dashboards
            };
        }

        default:
            return state;
    }
}
