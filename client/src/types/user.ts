interface IUser {
  name: string;
  email: string;
}

interface AppReducerState {
  user: IUser;
  token: string;
  isAdmin: boolean;
}

enum AppReducerActions {
  SET_USER_INFO = "SET_USER_INFO",
  SET_ADMIN = "SET_ADMIN",
  LOG_OUT = "LOG_OUT",
}

interface SetUserInfoAction {
  type: AppReducerActions.SET_USER_INFO;
  payload: Pick<AppReducerState, "user" | "token">;
}

interface SetAdminAction {
  type: AppReducerActions.SET_ADMIN;
  payload: boolean;
}

interface LogOutAction {
  type: AppReducerActions.LOG_OUT;
}

type AppActions = SetUserInfoAction | SetAdminAction | LogOutAction;

export type { IUser, AppReducerState, AppActions };
export { AppReducerActions };
