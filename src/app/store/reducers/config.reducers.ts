import { initialConfigState, IConfigState } from '../state/config.state';
import { ConfigAction, CONFIG_ACTIONS } from '../actions/config.actions';

export function configReducers(
    state = initialConfigState,
    action: ConfigAction
): IConfigState {
    switch (action.type) {
        case CONFIG_ACTIONS.GET: {
            return {
                ...state,
                loading: true
            };
        }

        case CONFIG_ACTIONS.GET_SUCCESS: {
            return {
                ...state,
                config: action.payload,
                loading: false,
                error: false
            };
        }

        case CONFIG_ACTIONS.GET_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        default:
            return state;
    }
}
