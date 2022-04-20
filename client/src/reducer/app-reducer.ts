import { AppActions, AppReducerActions, AppReducerState } from "../types/user";

const reducer = (
  state: AppReducerState,
  action: AppActions
): AppReducerState => {
  if (action.type === AppReducerActions.SET_USER_INFO) {
    const { user, token } = action.payload;
    return { ...state, user, token };
  }
  return { ...state };
};

export default reducer;
