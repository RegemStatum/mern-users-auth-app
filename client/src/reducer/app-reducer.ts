import { AppActions, AppReducerActions, AppReducerState } from "../types/user";

const reducer = (
  state: AppReducerState,
  action: AppActions
): AppReducerState => {
  if (action.type === AppReducerActions.SET_USER_INFO) {
    const { user, token } = action.payload;
    return { ...state, user, token };
  }
  if (action.type === AppReducerActions.SET_ADMIN) {
    return { ...state, isAdmin: action.payload };
  }
  if (action.type === AppReducerActions.LOG_OUT) {
    return {
      ...state,
      user: {
        name: "",
        email: "",
      },
      token: "",
      isAdmin: false,
    };
  }
  return { ...state };
};

export default reducer;
