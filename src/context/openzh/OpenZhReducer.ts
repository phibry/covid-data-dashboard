// types
import { dailyCase } from '../../utils/types/covidOpenZhTypes';

export enum OpenZhActionType {
  GET_CURRENT_DATA = 'GET_CURRENT_DATA',
}

export type Action = {
  type: OpenZhActionType.GET_CURRENT_DATA;
  payload: dailyCase;
};

type State = {
  dailyCase: dailyCase;
  loading: boolean;
};

const openZhReducer = (state: State, action: Action) => {
  switch (action.type) {
    case OpenZhActionType.GET_CURRENT_DATA:
      return {
        dailyCase: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default openZhReducer;
