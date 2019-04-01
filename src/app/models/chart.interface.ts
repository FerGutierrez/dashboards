import { ISeries } from './series.interface';

export interface IChart {
    id: number;
    name: string;
    series: ISeries[];
    options: any;
}
