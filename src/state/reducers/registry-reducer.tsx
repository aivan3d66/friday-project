import {BaseThunksType, InferActionsTypes} from "../redux-store";

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunksType<ActionsTypes>;

const SET_LOGIN = 'SET_LOGIN';

const initialState = {};

export const registryReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state
      }

    default:
      return state
  }
}

const actions = {
  setLogin: () => ({
    type: SET_LOGIN,
    payload: {}
  } as const),
}