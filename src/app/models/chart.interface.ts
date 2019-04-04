import { ISeries } from './series.interface';

export interface IChart {
    id?: number;
    name: string;
    series: ISeries[];
    colspan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    options?: any;
}
