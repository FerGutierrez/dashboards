import { IConfig } from '../../models/config.interface';

export interface IConfigState {
    config: IConfig;
    loading?: boolean;
    error?: any;
}

export const initialConfigState: IConfigState = {
    config: null
};
