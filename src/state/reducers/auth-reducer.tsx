import {BaseThunksType, InferActionsTypes} from "../redux-store";

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunksType<ActionsTypes>;

const GET_AUTH = 'GET_AUTH';

const initialState = {};

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state
      }

    default:
      return state
  }
}

const actions = {
  getAuth: () => ({
    type: GET_AUTH,
    payload: {}
  } as const)
}