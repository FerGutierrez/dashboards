import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { CONFIG_ACTIONS, GetConfig, GetConfigSuccess, GetConfigFail } from '../actions/config.actions';
import { ConfigService } from '../../services/config.service';
import { IConfig } from '../../models/config.interface';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$: Observable<Action> = this.actions$.ofType<GetConfig>(CONFIG_ACTIONS.GET)
        .switchMap(() => this.configService.fetch())
        .switchMap((config: IConfig) => {
            return Observable.of(new GetConfigSuccess(config));
        })
        .catch(error => Observable.of(new GetConfigFail(error)));

    constructor(
        private actions$: Actions,
        private configService: ConfigService
    ) {}
}
