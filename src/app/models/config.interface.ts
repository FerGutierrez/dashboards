import { IDashboard } from './dashboard.interface';

export interface IConfig {
    availableChartTypes: string[];
    defaultChart: any;
    dashboards: IDashboard[];
}
