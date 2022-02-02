export enum ThemeActionType {
  SET_THEME = 'SET_THEME',
}

type Action = {
  type: ThemeActionType.SET_THEME;
  payload: string;
};

const themeToggleReducer = (state: string, action: Action) => {
  switch (action.type) {
    case ThemeActionType.SET_THEME:
      return action.payload;

    default:
      return state;
  }
};

export default themeToggleReducer;
