import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {authReducer} from "./reducers/auth-reducer";
import {registryReducer} from "./reducers/registry-reducer";
import {passwordReducer} from "./reducers/password-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  registry: registryReducer,
  password: passwordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

type RootReducersType = typeof rootReducer;
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>;
export type BaseThunksType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
export type AppStateType = ReturnType<RootReducersType>;
