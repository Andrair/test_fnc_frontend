import {IAppAction} from "./actionCreators";
import {ActionTypes} from "./actionTypes";

export const INITIAL_STATE: IAppState = {
    loading: false,
    tasks: []
};

export interface IAppState {
    loading?: boolean;
    tasks?: ITask[]
}

export interface ITask {
    id_task?: number;
    name: string;
    description: string;
    init_date?: number;
    end_date?: number;
    duration: number;
    status: string;
	priority: string
}

export const reducer = (state: IAppState = INITIAL_STATE,
                        action: IAppAction): IAppState => {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case ActionTypes.SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        default:
            return state
    }
}