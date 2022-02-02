export enum ThemeActionType {
  SET_THEME = 'SET_THEME',
}

type Action = {
  type: 'SET_THEME';
  payload: any;
};

type State = {
  theme: any;
};

const themeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ThemeActionType.SET_THEME:
      return action.payload;

    default:
      return state;
  }
};

export default themeReducer;
