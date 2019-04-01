import { Action } from '@ngrx/store';
import { IConfig } from '../../models/config.interface';

export const CONFIG_ACTIONS = {
    GET: '[Config] Get Config',
    GET_SUCCESS: '[Config] Get Config Success',
    GET_FAIL: '[Config] Get Config Fail'
};

export class GetConfig implements Action {
    public readonly type = CONFIG_ACTIONS.GET;
    constructor (public payload: any = null) {}
}

export class GetConfigSuccess implements Action {
    public readonly type = CONFIG_ACTIONS.GET_SUCCESS;
    constructor(public payload: IConfig) {}
}

export class GetConfigFail implements Action {
    public readonly type = CONFIG_ACTIONS.GET_FAIL;
    constructor(public payload: any) {}
}

export type ConfigAction
    = GetConfig
    | GetConfigSuccess
    | GetConfigFail;
