import {IAppState, ITask} from "./reducer";
import {ActionTypes} from "./actionTypes";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import axios from "../shared/axios-util";

export type IAppAction = {
    type: string;
} & IAppState;

export const setLoading = (payload: boolean): IAppAction => {
    return {
        type: ActionTypes.SET_LOADING,
        loading: payload,
    };
};

export const setTasks = (payload: ITask[]): IAppAction => {
    return {
        type: ActionTypes.SET_TASKS,
        tasks: payload,
    };
};

export const getTasks = (): ThunkAction<void, IAppState, undefined, IAppAction> => {
    return async (
        dispatch: ThunkDispatch<IAppState, any, IAppAction>
    ): Promise<void> => {
        try {
            const response = await axios.get("api/tasks")
            dispatch(setTasks(response.data))
        } catch (exception) {
            console.error(exception);
        }
    };
};

export const deleteTask = (id_task: number): ThunkAction<void, IAppState, undefined, IAppAction> => {
    return async (
        dispatch: ThunkDispatch<IAppState, any, IAppAction>
    ): Promise<void> => {
        try {
            await axios.delete(`api/tasks/${id_task}`)
          	dispatch(getTasks())
        } catch (exception) {
            console.error(exception);
        }
    };
};

export const createTask = (task: ITask): ThunkAction<void, IAppState, undefined, IAppAction> => {
    return async (
        dispatch: ThunkDispatch<IAppState, any, IAppAction>
    ): Promise<void> => {
        try {
            await axios.post(`api/tasks`, task)
          	dispatch(getTasks())
        } catch (exception) {
            console.error(exception);
        }
    };
};
