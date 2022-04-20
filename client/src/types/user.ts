interface IUser {
  name: string;
  email: string;
}

interface AppReducerState {
  user: IUser;
  token: string;
}

enum AppReducerActions {
  SET_USER_INFO = "SET_USER_INFO",
}

interface SetUserInfoAction {
  type: AppReducerActions.SET_USER_INFO;
  payload: Pick<AppReducerState, "user" | "token">;
}

type AppActions = SetUserInfoAction;

export type { IUser, AppReducerState, AppActions };
export { AppReducerActions };
