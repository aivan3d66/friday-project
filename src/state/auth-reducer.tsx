type InitialStateType = typeof initialState;
type ActionsTypes = any

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

export const actions = {
  getAuth: () => ({
    type: GET_AUTH,
    payload: {}
  } as const)
}