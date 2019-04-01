import { IChart } from './chart.interface';

export interface IDashboard {
    id: number;
    name: string;
    charts: IChart[];
}
