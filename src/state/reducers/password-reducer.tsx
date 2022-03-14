import {BaseThunksType, InferActionsTypes} from "../redux-store";

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunksType<ActionsTypes>;

const SET_PASSWORD = 'SET_PASSWORD';
const RECOVERY_PASSWORD = 'RECOVERY_PASSWORD';

const initialState = {};

export const passwordReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state
      }

    case RECOVERY_PASSWORD:
      return {
        ...state
      }

    default:
      return state
  }
}

const actions = {
  setPassword: (password: string) => ({
    type: SET_PASSWORD,
    payload: {password}
  } as const),
  recoveryPassword: (password: string) => ({
    type: RECOVERY_PASSWORD,
    payload: {password}
  } as const),
}