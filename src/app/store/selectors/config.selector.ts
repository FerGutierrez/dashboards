import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IConfigState } from '../state/config.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
);

export const selectConfigLoading = createSelector(
    configState,
    (state: IConfigState) => state.loading
);

export const selectConfigError = createSelector(
    configState,
    (state: IConfigState) => state.error
);

export const selectChartTypes = createSelector(
    configState,
    (state: IConfigState) => state.config.availableChartTypes
);

export const selectDefaultChart = createSelector(
    configState,
    (state: IConfigState) => state.config.defaultChart
);
