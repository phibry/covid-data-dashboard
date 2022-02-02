export enum MobNavigationActionType {
  TOGGLE_NAV = 'TOGGLE_NAV',
}

type Action = {
  type: MobNavigationActionType.TOGGLE_NAV;
  payload: boolean;
};

const mobNavigationToggleReducer = (state: boolean, action: Action) => {
  switch (action.type) {
    case MobNavigationActionType.TOGGLE_NAV:
      return action.payload;

    default:
      return state;
  }
};

export default mobNavigationToggleReducer;
